// Mengetahui path dari sebuah file
import path from 'path';

const file = '/Users/tiodwi/contoh.txt';1 //Dummy Location

console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));