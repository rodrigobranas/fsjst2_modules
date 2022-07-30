const { isMainThread, Worker } = require("worker_threads");

if (isMainThread) {
	console.log("main thread", process.pid);
	new Worker("./src/worker_threads/1.js");
	new Worker("./src/worker_threads/1.js");
	new Worker("./src/worker_threads/1.js");
} else {
	console.log("worker", process.pid);
}
