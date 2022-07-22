import net from "net";

net.createServer((socket) => {
	socket.on("data", function (chunk) {
		const requestRaw = chunk.toString("ascii");
		const [requestLineAndHeaders, body] = requestRaw.split("\r\n\r\n")
		const [requestLine, ...headers] = requestLineAndHeaders.split("\r\n");
		const [method, url, protocol] = requestLine.split(" ");
		console.log(method, url, protocol);
		console.log(headers);
		console.log(body);
		socket.end();
	});
}).listen(3000);
