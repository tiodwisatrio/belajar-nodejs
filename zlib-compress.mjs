// Zlib adalah standard library yg digunakan utk melakukan kompresi data menggunakan Gzip

import zlib from 'zlib';
import fs from 'fs';

const source = fs.readFileSync('zlib-compress.mjs');
const result = zlib.gzipSync(source);

// console.log(result.toString());
fs.writeFileSync('zlib-compress.mjs.txt', result);