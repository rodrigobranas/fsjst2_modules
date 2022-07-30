const cluster = require("cluster");

if (cluster.isPrimary) {
	console.log("primary", process.pid);
	cluster.fork();
} else {
	console.log("worker", process.pid);
}