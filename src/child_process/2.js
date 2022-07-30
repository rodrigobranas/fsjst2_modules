const child_process = require("child_process");

child_process.exec("node src/child_process/worker.js", function (error, data) {
	console.log(data);
});
