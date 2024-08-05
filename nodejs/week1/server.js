import { createServer } from "http";

const server = createServer();
server.listen(8080);

server.on("request", function (req, res) {
  console.log(req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});
