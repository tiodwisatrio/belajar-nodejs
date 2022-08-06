import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", (message) => {
    for (let i = 0; i < message; i++) {
        console.log(`Thread Id-${threadId} Send Message : ${i}`);
        parentPort.postMessage(i);
    }

    parentPort.close();
 
});

