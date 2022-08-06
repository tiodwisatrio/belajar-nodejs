// Code ASynchronus pada Javascipt Server (Node JS)
// Global ASynchronus

function samplePromise() {
    return Promise.resolve("Tayo");
}

const nama = await samplePromise();
console.log(nama);


