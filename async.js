// Code ASynchronus pada Javascipt Biasa
// Asynchronus adalah sebuah fungsi yang mengembalikan nilai dalam bentuk promise
// Promise adalah sebuah objek yang menyimpan nilai dalam bentuk future

function samplePromise() {
    return Promise.resolve("Tio");
}

async function run() {
    const nama = await samplePromise();
    console.log(nama);
}

run();
