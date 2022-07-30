const cluster = require("cluster");
const http = require("http");

if (cluster.isPrimary) {
	console.log("primary", process.pid);
	cluster.fork();
	cluster.fork();
	cluster.fork();
} else {
	console.log("worker", process.pid);
	http.createServer((req, res) => {
		res.write(`${process.pid}`);
		res.end();
	}).listen(3000);
}