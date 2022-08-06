// Mengetahui Spesifikasi OS yang dipakai NODE
import os from 'os';

console.log('platform : ' + os.platform());
console.log('arsitektur : ' + os.arch());
console.table(os.cpus())
console.log('Free Memory : ' + os.freemem())
console.log('Total Memory : ' + os.totalmem())