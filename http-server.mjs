// Standard library HTTP juga tidak hanya bisa digunakan utk membuat HTTP Client, tapi bisa juga digunakan untuk membuat HTTP Server.
// Untuk Kasus Simple boleh saja menggunakan HTTP Server library NodeJS. Namun dalam kasus yg lebih kompleks disarankan menggunakan Framework seperti ExpressJS.


import http from 'http';

const server = http.createServer((request, response) => {

    console.log(request.method);
    console.log(request.url);

    if(request.url === '/tio') {
        response.write("Hello Tio")
    } else{
        response.write('Hello HTTP Server')
    }

    response.end()
})

server.listen('3000', () => {
    console.log('Server is running on port 3000');
})

