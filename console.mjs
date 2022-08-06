// Console adalah standard library utk memprint code di NodeJS

// Mengirim print an console ke file lain bukan ke terminal
import {Console} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('consolee.log');

const log = new Console({
    stdout: file,
    stderr: file,
})

log.info('Hello World');
log.error("Error masszehh");

const person = {
    firstName : 'Tio',
    lastName : 'Satrio',
}

log.table(person);


// Hasil console akan ada di file 'consolee.log'