const { isMainThread, Worker, parentPort } = require("worker_threads");

function fibonacci (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (isMainThread) {
	console.log("main thread", process.pid);
	const a = new Worker(__filename);
	a.on("message", function (data) {
		console.log(data);
	});
	const b = new Worker(__filename);
	b.on("message", function (data) {
		console.log(data);
	});
	const c = new Worker(__filename);
	c.on("message", function (data) {
		console.log(data);
	});
} else {
	console.log("worker", process.pid);
	const result = fibonacci(42);
	parentPort.postMessage(result);
}
