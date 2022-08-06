// Process adalah standard libary yg digunakan utk mendapatkan info proses Node JS yg sedang berjalan
// Process juga merupakan Instance dari EventEmitter

import process from "process";

process.addListener("exit", (code) => {
    console.log(`Node JS exit with code ${code}`);
});

console.log(process.version)
console.table(process.argv)
console.table(process.report)

process.exit(1)

console.log('hello'); //tidak keluar karena sudah exit