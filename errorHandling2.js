var EE = require("events");

var ee = new EE();

ee.on("error", err => console.error("I am the error listener"));

ee.emit("error", () => new Error("I am the error message"));
