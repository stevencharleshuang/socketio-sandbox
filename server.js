const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3001);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  socket.emit('news', { message: 'hello world' });
  socket.on('my other event', function (data) {
    console.log('>>> server: ', data);
  });
});

