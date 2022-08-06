import fs from 'fs/promises';

// readFile => Membaca File
const buffer = await fs.readFile("file-system.mjs");
console.log(buffer.toString());

// writeLine => Menulis/Mengisi File
await fs.writeFile("contohFS.txt", "Hello from File System");
