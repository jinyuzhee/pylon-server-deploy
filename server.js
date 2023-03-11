const http = require('http');
const socketIO = require('socket.io');

const server = http.createServer();
server.listen(55455);

const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('establishing a new connection with client');
  setInterval(() => {
    socket.emit('message', new Date().getTime());
  }, 100);

  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});
