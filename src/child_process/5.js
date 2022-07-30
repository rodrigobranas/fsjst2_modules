const child_process = require("child_process");

const cp = child_process.spawn("node", ["src/child_process/worker.js"]);
cp.stdout.on("data", function (data) {
	console.log(data.toString());
});

