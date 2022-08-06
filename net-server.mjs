// Net merupakan standard library yg bisa digunakan utk membuat network client dan server berbasis TCP (Transmission Control Protocol).
// Net berbentuk Stream yg bisa dibaca/ditulis dan menambah event listener.

// Membuat Net Server

import net from 'net';
const server = net.createServer( (client) => {
    console.log("Client connected");
    client.addListener("data", (data) => {
        // Menerima pesan
        console.log(`Receive data ${data.toString()}`);

        // Membalas pesan
        client.write(`Hello ${data.toString()}\r\n`);
    });
});

server.listen(3001, 'localhost');
