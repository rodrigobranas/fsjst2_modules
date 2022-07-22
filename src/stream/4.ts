import http from "http";
import fs from "fs";

http.createServer(function (req, res) {
	const stream = fs.createReadStream("books.csv", "utf8");
	stream.pipe(res);
}).listen(3000);
