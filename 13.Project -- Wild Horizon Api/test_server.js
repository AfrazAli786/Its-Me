import http from "node:http";
let port = 8000;

// Arguments are changed from (res, req) to (req, res)
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  if (req.url === "/api") {
    res.end("Fuck u");
  }
});

server.listen(port, () => {
  console.log("Server is running on http://localhost:8000");
});
