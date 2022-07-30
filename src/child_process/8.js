const child_process = require("child_process");

const cp1 = child_process.fork("src/child_process/worker_fibonacci.js");
cp1.on("message", function (data) {
	console.log(data);
});
const cp2 = child_process.fork("src/child_process/worker_fibonacci.js");
cp2.on("message", function (data) {
	console.log(data);
});
const cp3 = child_process.fork("src/child_process/worker_fibonacci.js");
cp3.on("message", function (data) {
	console.log(data);
});
