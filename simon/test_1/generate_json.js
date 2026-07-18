import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

function extractValue(content, field) {
  const regex = new RegExp(`-\\s*\\*\\*${field}:\\*\\*\\s*(.*)`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function parseMetadata(content, typeOfLife, name) {
  const metadata = {
    typeOfLife: typeOfLife || 'khac',
    gender: '',
    regions: [],
    ageMin: null,
    ageMax: null,
    education: '',
    level: '',
    fullName: ''
  };

  if (name.toLowerCase().includes('nam')) metadata.gender = 'nam';
  else if (name.toLowerCase().includes('nữ') || name.toLowerCase().includes('nu')) metadata.gender = 'nu';

  if (!content) return metadata;

  // FullName extract
  const fullNameMatch = content.match(/#\s*\[.*?\]\s*–\s*(.*)/i) || content.match(/#\s*(.*)\s*\(/i);
  if (fullNameMatch) {
     metadata.fullName = fullNameMatch[1].trim();
  }

  const genderMatch = extractValue(content, 'Giới tính') || extractValue(content, 'Loại hình');
  if (genderMatch) {
    const g = genderMatch.toLowerCase();
    if (g.includes('nam')) metadata.gender = 'nam';
    if (g.includes('nữ') || g.includes('nu')) metadata.gender = 'nu';
    if (g.includes('cả hai')) metadata.gender = 'cahai';
  }

  const levelMatch = extractValue(content, 'Bậc');
  if (levelMatch) {
    const l = levelMatch.toLowerCase();
    if (l.includes('chủng viện')) metadata.level = 'chungvien';
    else if (l.includes('tu đoàn') || l.includes('tu hội')) metadata.level = 'tudoan';
    else if (l.includes('dòng tu')) metadata.level = 'dongtu';
  }

  const regionMatch = extractValue(content, 'Miền hiện diện');
  if (regionMatch) {
    const r = regionMatch.toLowerCase();
    if (r.includes('bắc') || r.includes('bac')) metadata.regions.push('bac');
    if (r.includes('trung')) metadata.regions.push('trung');
    if (r.includes('nam')) metadata.regions.push('nam');
  }

  const eduMatch = extractValue(content, 'Học vấn tối thiểu');
  if (eduMatch) {
    const e = eduMatch.toLowerCase();
    if (e.includes('cao học')) metadata.education = 'caohoc';
    else if (e.includes('đại học')) metadata.education = 'daihoc';
    else if (e.includes('cao đẳng')) metadata.education = 'caodang';
    else if (e.includes('thpt') || e.includes('cấp 3')) metadata.education = 'thpt';
    else if (e.includes('trung cấp') || e.includes('cấp 2')) metadata.education = 'trungcap';
    else if (e.includes('tiểu học') || e.includes('cấp 1')) metadata.education = 'tieuhoc';
  }

  const ageMatch = extractValue(content, 'Độ tuổi');
  if (ageMatch) {
    const numbers = ageMatch.match(/\d+/g);
    if (numbers && numbers.length > 0) {
      if (numbers.length === 1) {
         if (ageMatch.toLowerCase().includes('dưới') || ageMatch.toLowerCase().includes('tối đa')) {
           metadata.ageMax = parseInt(numbers[0], 10);
         } else {
           metadata.ageMin = parseInt(numbers[0], 10);
         }
      } else if (numbers.length >= 2) {
         metadata.ageMin = parseInt(numbers[0], 10);
         metadata.ageMax = parseInt(numbers[1], 10);
      }
    }
  }

  return metadata;
}

const entities = [];

function traverse(currentPath) {
    if (!fs.existsSync(currentPath)) return;

    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    let hasMarkdownFiles = false;
    let minimalContent = '';

    for (const entry of entries) {
      if (entry.isDirectory()) {
        traverse(path.join(currentPath, entry.name));
      } else if (entry.isFile() && entry.name === 'minimal.md') {
        hasMarkdownFiles = true;
        minimalContent = fs.readFileSync(path.join(currentPath, entry.name), 'utf-8');
      }
    }

    if (hasMarkdownFiles) {
      const relPath = path.relative(CONTENT_DIR, currentPath);
      const parts = relPath.split(path.sep);
      const name = parts[parts.length - 1];
      const category = parts.length > 1 ? parts[parts.length - 2] : 'Khác';
      const rootFolder = parts.length > 0 ? parts[0] : 'khac';

      const metadata = parseMetadata(minimalContent, rootFolder, name);

      entities.push({
        id: relPath.replace(/[\\/]/g, '-'),
        name: name,
        fullName: metadata.fullName || name,
        category: category,
        path: relPath.replace(/\\/g, '/'),
        typeOfLife: metadata.typeOfLife,
        gender: metadata.gender,
        regions: metadata.regions,
        ageMin: metadata.ageMin,
        ageMax: metadata.ageMax,
        education: metadata.education,
        level: metadata.level,
        searchPath: path.join(relPath, 'search.md').replace(/\\/g, '/'),
        minimalPath: path.join(relPath, 'minimal.md').replace(/\\/g, '/'),
        fullPath: path.join(relPath, 'full.md').replace(/\\/g, '/')
      });
    }
}

traverse(CONTENT_DIR);

fs.writeFileSync(path.join(CONTENT_DIR, 'data.json'), JSON.stringify(entities, null, 2));
console.log('Generated content/data.json successfully!');
