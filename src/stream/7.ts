import http from "http";
import fs from "fs";

http.createServer(function (req, res) {
	const stream = fs.createReadStream("movie.mp4");
	res.writeHead(200, { "content-type": "video/mp4" });
	stream.pipe(res);
}).listen(3000);

