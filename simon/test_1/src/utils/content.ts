import fs from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.join(process.cwd(), 'content');
const DATA_JSON_PATH = path.join(CONTENT_DIR, 'data.json');

export interface EntityData {
  id: string;
  name: string;
  fullName: string;
  category: string;
  path: string; // Relative path used for routing

  // File contents
  searchContent: string;
  minimalContent: string;
  fullContent: string;

  // Metadata for filtering
  typeOfLife: string;
  gender: string;
  regions: string[];
  ageMin: number | null;
  ageMax: number | null;
  education: string;
  level: string;
}

export function getAllEntities(): EntityData[] {
  if (!fs.existsSync(DATA_JSON_PATH)) {
    console.warn(`Warning: ${DATA_JSON_PATH} not found. Please generate it first.`);
    return [];
  }

  const rawData = fs.readFileSync(DATA_JSON_PATH, 'utf-8');
  let dataJson: any[] = [];
  try {
    dataJson = JSON.parse(rawData);
  } catch (e) {
    console.error("Error parsing data.json", e);
    return [];
  }

  const entities: EntityData[] = dataJson.map(item => {
    const searchFilePath = path.join(CONTENT_DIR, item.searchPath || '');
    const minimalFilePath = path.join(CONTENT_DIR, item.minimalPath || '');
    const fullFilePath = path.join(CONTENT_DIR, item.fullPath || '');

    let searchContent = '';
    let minimalContent = '';
    let fullContent = '';

    try {
      if (fs.existsSync(searchFilePath)) searchContent = fs.readFileSync(searchFilePath, 'utf-8');
      if (fs.existsSync(minimalFilePath)) minimalContent = fs.readFileSync(minimalFilePath, 'utf-8');
      if (fs.existsSync(fullFilePath)) fullContent = fs.readFileSync(fullFilePath, 'utf-8');
    } catch (e) {
      console.error(`Error reading markdown files for ${item.id}`, e);
    }

    return {
      ...item,
      searchContent,
      minimalContent,
      fullContent
    };
  });

  return entities;
}
