import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface EntityData {
  id: string;
  name: string;
  category: string;
  path: string; // The relative path used for routing
  searchContent: string;
  minimalContent: string;
  fullContent: string;

  // Metadata for filtering
  typeOfLife: string; // Loại đời sống thánh hiến
  gender: string; // Giới tính
  regions: string[]; // Vị trí địa lý
  ageMin: number | null; // Độ tuổi tối thiểu
  ageMax: number | null; // Độ tuổi tối đa
  education: string; // Học vấn tối thiểu
  level: string; // Cấp bậc
}

function extractValue(content: string, field: string): string | null {
  // Regex to match `- **Field Name:** value` (case insensitive)
  const regex = new RegExp(`-\\s*\\*\\*${field}:\\*\\*\\s*(.*)`, 'i');
  const match = content.match(regex);
  return match ? match[1].trim() : null;
}

function parseMetadata(content: string, typeOfLife: string, name: string): Partial<EntityData> {
  const metadata: Partial<EntityData> = {
    typeOfLife: typeOfLife || 'khac',
    gender: '',
    regions: [],
    ageMin: null,
    ageMax: null,
    education: '',
    level: ''
  };

  // Check the folder name (Nam / Nữ) as a fallback for gender
  if (name.toLowerCase().includes('nam')) metadata.gender = 'nam';
  else if (name.toLowerCase().includes('nữ')) metadata.gender = 'nu';

  if (!content) return metadata;

  // Giới tính
  const genderMatch = extractValue(content, 'Giới tính') || extractValue(content, 'Loại hình');
  if (genderMatch) {
    const g = genderMatch.toLowerCase();
    if (g.includes('nam')) metadata.gender = 'nam';
    if (g.includes('nữ')) metadata.gender = 'nu';
    if (g.includes('cả hai')) metadata.gender = 'cahai';
  }

  // Cấp bậc
  const levelMatch = extractValue(content, 'Bậc');
  if (levelMatch) {
    const l = levelMatch.toLowerCase();
    if (l.includes('chủng viện')) metadata.level = 'chungvien';
    else if (l.includes('tu đoàn') || l.includes('tu hội')) metadata.level = 'tudoan';
    else if (l.includes('dòng tu')) metadata.level = 'dongtu';
  }

  // Vị trí địa lý (Miền hiện diện)
  const regionMatch = extractValue(content, 'Miền hiện diện');
  if (regionMatch) {
    const r = regionMatch.toLowerCase();
    if (r.includes('bắc')) metadata.regions!.push('bac');
    if (r.includes('trung')) metadata.regions!.push('trung');
    if (r.includes('nam')) metadata.regions!.push('nam');
  }

  // Học vấn tối thiểu
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

  // Độ tuổi
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

export function getAllEntities(): EntityData[] {
  const entities: EntityData[] = [];

  function traverse(currentPath: string) {
    if (!fs.existsSync(currentPath)) return;

    const entries = fs.readdirSync(currentPath, { withFileTypes: true });

    let hasMarkdownFiles = false;
    let searchContent = '';
    let minimalContent = '';
    let fullContent = '';

    for (const entry of entries) {
      if (entry.isDirectory()) {
        traverse(path.join(currentPath, entry.name));
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        hasMarkdownFiles = true;
        const filePath = path.join(currentPath, entry.name);
        const content = fs.readFileSync(filePath, 'utf-8');

        if (entry.name === 'search.md') searchContent = content;
        if (entry.name === 'minimal.md') minimalContent = content;
        if (entry.name === 'full.md') fullContent = content;
      }
    }

    if (hasMarkdownFiles && (searchContent || minimalContent || fullContent)) {
      const relPath = path.relative(CONTENT_DIR, currentPath);
      const parts = relPath.split(path.sep);
      const name = parts[parts.length - 1];
      const category = parts.length > 1 ? parts[parts.length - 2] : 'Khác';
      const rootFolder = parts.length > 0 ? parts[0] : 'khac';

      const metadata = parseMetadata(minimalContent, rootFolder, name);

      entities.push({
        id: relPath.replace(/[\\/]/g, '-'),
        name,
        category,
        path: relPath.replace(/\\/g, '/'),
        searchContent,
        minimalContent,
        fullContent,
        typeOfLife: metadata.typeOfLife || 'khac',
        gender: metadata.gender || '',
        regions: metadata.regions || [],
        ageMin: metadata.ageMin || null,
        ageMax: metadata.ageMax || null,
        education: metadata.education || '',
        level: metadata.level || ''
      });
    }
  }

  traverse(CONTENT_DIR);

  return entities;
}
