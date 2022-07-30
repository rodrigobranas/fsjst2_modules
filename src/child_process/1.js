const child_process = require("child_process");

child_process.exec("ls -lah 1> out.log ", function (error, data) {
	console.log(data);
});
