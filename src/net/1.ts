import net from "net";

net.createServer((socket) => {
	socket.on("data", function (chunk) {
		console.log(chunk.toString());
		socket.end();
	});
}).listen(3000);
