import http from "http";
import fs from "fs/promises";

http.createServer(async function (req, res) {
	const file = await fs.readFile("books.csv", "utf8");
	res.end(file);
}).listen(3000);
