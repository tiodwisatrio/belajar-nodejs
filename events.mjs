// Events => Standar Library di NodeJS yg bisa di pakai untuk membuat Event Listener
// Event Listener => Fungsi yg di panggil ketika event terjadi
// Event Emitter => Fungsi yg bisa membuat event

import { EventEmitter } from 'events';

const emitter = new EventEmitter();

emitter.addListener("Hello", (name) => {
    console.log(`Hello ${name}`);
})

emitter.addListener("Hello", (name) => {
    console.log(`WHY ${name}`);
})

emitter.emit('Hello', 'Tio')