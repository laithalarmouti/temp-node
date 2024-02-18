const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Our Home Page.');
    } else if (req.url === '/about') {
        res.end('This is a brief about us page.');
    } else {
        res.end(
            '<h1>WOOPS!</h1><p>We cant seem to find the page you requested.</p><a href="/">Back home </a>'
        );
    }
});

server.listen(5000);
