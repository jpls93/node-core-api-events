var EE = require("events");
var process = require("process");
class myEE extends EE {}

var ee = new myEE();
/*
 * Have Node execute this file => pre-test
 * Comment the line below => implementation
 * Have Node execute this file => post-test
 * Compare pre-test and post-test
 */
process.on("uncaughtException", () => console.error("safeguard!"));

ee.emit("error", () => new Error("sadface"));
