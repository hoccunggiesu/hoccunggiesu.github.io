import { getAllEntities } from './src/utils/content.js';
console.log(getAllEntities().map(e => ({ name: e.name, typeOfLife: e.typeOfLife, gender: e.gender, regions: e.regions, ageMin: e.ageMin, ageMax: e.ageMax, education: e.education, level: e.level })));
