// Stream merupakan standard library utk kontrak aliran data di Node JS
// Stream bisa jadi object yg bisa dibaca/ditulis
// Stream turunan dari EventEmitter

// Mengunakan file system
import fs from 'fs';

// Menulis Stream dengan fs
const writer = fs.createWriteStream('stream.log')
writer.write('Tio\n');
writer.write('Dwi\n');
writer.write('Satrio\n');
writer.end();

// Membaca Stream dengan fs
const reader = fs.createReadStream('stream.log');
reader.addListener("data", (data) => {
    console.info(data.toString());
});