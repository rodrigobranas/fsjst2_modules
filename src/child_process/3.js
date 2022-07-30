const child_process = require("child_process");

child_process.execFile("node", ["-v"], function (error, data) {
	console.log(data);
});
