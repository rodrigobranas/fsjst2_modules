const { isMainThread, Worker } = require("worker_threads");

function fibonacci (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
	console.log("main thread", process.pid);
	new Worker("./src/worker_threads/2.js");
	new Worker("./src/worker_threads/2.js");
	new Worker("./src/worker_threads/2.js");
} else {
	console.log("worker", process.pid);
	const result = fibonacci(47);
	console.log(result);
}
