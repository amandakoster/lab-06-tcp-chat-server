'use strict' ;

const net = require('net');
const server = net.createServer();
const Client = require('./constructor.js');
let clientPool = [];

server.on('connection', (socket) => {
  let client = new Client(socket);
  socket.write('Hello socket, welcome to this chatbox!\n');
  console.log(`${client.nickname} connected to chat!`);

  clientPool = [...clientPool, client];

  let handleDisconnect = () => {
    console.log(`${client.nickname} has left the chat.`);
    clientPool = clientPool.filter(item => item !==socket);
  };

  socket.on('error', handleDisconnect);
  socket.on('close', handleDisconnect);

  socket.on('data', (buffer) => {
    let data = buffer.toString();

    if(data.startsWith('/dm')) {
      let username = data.split(' ')[1];
      let matchedUsers = clientPool.filter(item => item.nickname === username);
      matchedUsers.forEach((dmUser) => {
        let message = data.split(' ').slice(2).join(' ');
        dmUser.socket.write(`${client.nickname}: ${message}`);
      });
      return;
    }

    if(data.startsWith('/troll')) {
      let timestoWrite = data.split(' ')[1];
      let content = data.split(' ').slice(2).join();
      console.log(timestoWrite);
      for (var i = 0; i < timestoWrite; i++) {
        clientPool.forEach((user) => {
          user.socket.write(`${client.nickname}: ${content}\n`);
        });
      }
      return;
    }

    if(data.startsWith('/nick')) {
      let content = data.split('/nick ')[1].trim() || '';
      client.nickname = content;
    }

    clientPool.forEach((item) => {
      item.socket.write(`${client.nickname}: ${data}`);
    });

    if(data.startsWith('/quit')) {
      socket.end();
    }
  });
});

server.listen(3000, () => {
  console.log('server up on port 3000');
});
