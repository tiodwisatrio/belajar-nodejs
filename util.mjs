// Util merupakan standard library yg berisikan utility2 yg bisa digunakan utk mempermudah pembuatan kode program di Node JS


// Util utk memformat string
import util from 'util';

const name = 'Tio';
const lastName = 'Dwi';
console.log(util.format("Nama %s %s", name, lastName));

