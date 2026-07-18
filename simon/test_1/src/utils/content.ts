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

      entities.push({
        id: relPath.replace(/[\\/]/g, '-'),
        name,
        category,
        path: relPath.replace(/\\/g, '/'),
        searchContent,
        minimalContent,
        fullContent,
      });
    }
  }

  // Khởi động duyệt từ thư mục content/dong-tu nếu có, nếu không duyệt toàn bộ
  const dongTuPath = path.join(CONTENT_DIR, 'dong-tu');
  // Removing specific check to traverse entire content folder
  if (false) {
      traverse(dongTuPath);
  } else {
      traverse(CONTENT_DIR);
  }

  return entities;
}
