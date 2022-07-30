const cluster = require("cluster");
const http = require("http");

function fibonacci (n) {
	return n < 1 ? 0 : n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

if (cluster.isPrimary) {
	console.log("primary", process.pid);
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	console.log("worker", process.pid);
	http.createServer((req, res) => {
		const result = fibonacci(46);
		console.log(result);
		res.write(`${process.pid} ${result}`);
		res.end();
	}).listen(3000);
}