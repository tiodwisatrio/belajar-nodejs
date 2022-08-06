import net from 'net';
const client = net.createConnection({port: 3001, host: 'localhost'});


client.addListener("data", (data) => {
    console.log(`Receive data from server : ${data.toString()}`);
})    

setInterval(() => {
    client.write(`${process.argv[2]}\r\n`);
}, 2000)