var EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log('The "event" event emitted');
});

myEmitter.emit("event");
// => The "event" event emitted
