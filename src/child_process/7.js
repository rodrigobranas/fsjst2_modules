const child_process = require("child_process");

const cp = child_process.fork("src/child_process/worker_date.js");
cp.on("message", function (data) {
	console.log(data);
});
