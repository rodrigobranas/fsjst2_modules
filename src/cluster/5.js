const cluster = require("cluster");

function fibonacci (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
	console.log("primary", process.pid);
	const a = cluster.fork();
	a.on("message", function (data) {
		console.log("a", data);
	});
	const b = cluster.fork();
	b.on("message", function (data) {
		console.log("b", data);
	});
	const c = cluster.fork();
	c.on("message", function (data) {
		console.log("c", data);
	});
} else {
	console.log("worker", process.pid);
	const result = fibonacci(43);
	process.send(`${process.pid} ${result}`);
}
