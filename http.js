const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === '/'){
    res.end("welcome")
} 
if (req.url === '/about'){
    res.end("here is the about page")
}
res.end("<h1>OOPS</h1>")
})

server.listen(5000);

