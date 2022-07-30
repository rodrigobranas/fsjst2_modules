const child_process = require("child_process");

const cp1 = child_process.spawn("node", ["src/child_process/worker_fibonacci.js"]);
cp1.stdout.on("data", function (data) {
	console.log(data.toString());
});
const cp2 = child_process.spawn("node", ["src/child_process/worker_fibonacci.js"]);
cp2.stdout.on("data", function (data) {
	console.log(data.toString());
});
const cp3 = child_process.spawn("node", ["src/child_process/worker_fibonacci.js"]);
cp3.stdout.on("data", function (data) {
	console.log(data.toString());
});
