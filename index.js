const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.send('<html><body><h1>Hello world</h1><script src="/socket.io/socket.io.js"></script>\n' +
        '<script>\n' +
        '  var socket = io();\n' +
        '</script></body></html>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3000, () => {
    console.log('listening on *:3000');
});