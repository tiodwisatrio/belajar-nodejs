import timers from 'timers/promises';

// console.log(new Date());
// const name = await timers.setTimeout(1000, 'Tio');
// console.log(new Date());
// console.log(name);


// Dengan For
for await (const startTime of timers.setInterval(1000, 'Tio')) {
    console.log(`Start time at ${new Date()}`);
}