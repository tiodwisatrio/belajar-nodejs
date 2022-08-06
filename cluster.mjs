// Cluster adalah standard library Node JS yang bisa menjalankan beberapa process Node JS sekaligus.
// Menjalankan nodejs multiple process, yg dimanage oleh satuan cluster.

// * Terdapat 2 jenis Cluster yaitu Primary dan Worker
// Primary digunakan sebagai manajer utk para Worker
// Worker adalah aplikasi yg menjalankan process/tugas nya

import cluster from 'cluster';
import http from 'http';
import os from 'os';
import process from 'process';

if(cluster.isPrimary) {
    for(let i = 0; i < os.cpus().length; i++) {
        console.log(`primary : ${process.pid}`)
        cluster.fork(); //menajalankan worker dgn fork()
    }
    cluster.addListener('exit', (worker) => {
        console.log(`Worker=${worker.id} is exit`);
        cluster.fork();
    })
}

if(cluster.isWorker) {
    console.log(`Worker : ${process.pid}`);

    const server = http.createServer((request, response) => {
        response.write(`Response from process ${process.pid}`);
        response.end();
        process.exit();
    })

    server.listen(3001);
}
