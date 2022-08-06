// Node JS memiliki standar HTTP yang dapat digunakan untuk mengakses server.
// Salah satu fitur yang dapat digunakan adalah request dan response menggunakan NodeJS.


import https from 'https';

const url = 'https://hookb.in/BYLk0nx0w9hknxZk3Gyr';
const request = https.request(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.log(`Receive data : ${data.toString()}`);
    })
})

const body = JSON.stringify({
    firstName : 'Tio',
    lastName : 'Satrio'
})

request.write(body);
request.end();