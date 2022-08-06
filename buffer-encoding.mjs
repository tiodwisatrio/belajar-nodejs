// Tranlate encoding to buffer
const buffer = Buffer.from('Tio Dwi Satrio', 'utf-8');
console.log(buffer.toString());
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));