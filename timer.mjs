// Timer merupakan standard library utk melakukan scheduling di Node JS
// Semua function Timer menggunakan Callback Function
// Jika ingin menggunakan Timer versi Promise, kita bisa mengimport dari module timer/promise

// Versi Callback
setInterval(() => {
    console.log(`Start time at ${new Date()}`);
}, 2000)
