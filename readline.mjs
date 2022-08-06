// Readline merupakan standard libary yg digunakan utk membaca input dari user
// Pada nodeJS versi 16 hanya bisa menggunakan callback, sedangkan versi NodeJS versi 17 bisa menggunakan Promise (masih experimental)

import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    
})

input.question('Siapa nama antum? ', (nama) => {
    console.log(`Hello ${nama} have a good day`);
    input.close();
})



