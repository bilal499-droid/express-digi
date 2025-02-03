const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  //imagine if our application have 30,s or 40,s route it,s
  //more difficult to manage the routes that,s where the express come
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello ice tea \n");
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("thanks for ordering ice tea \n");
  } else {
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/plain");
    res.end("404 not found \n");
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
