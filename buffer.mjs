// Buffer merupakan object yg berisikan urutan byte dengan panjang tetap
// Buffer merupakan turunan dari tipe data Uint8Array
// Buffer tidak perlu diimport karena sudah ada di global


const buffer = Buffer.from('Tio Dwi Satrio');
console.log(buffer);
console.log(buffer.toString());

console.log('');

buffer.reverse();
console.log(buffer);
console.log(buffer.toString());
