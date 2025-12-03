import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const text = readFileSync(join(__dirname, 'input.txt'), 'utf-8');
const array = text.split('\n'); // E.g. '\n' or ','
export { array as input };  