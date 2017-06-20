'use strict' ;

const net = require('net');
const server = net.createServer();
const Client = require('./constructor.js');
let clientPool = [];

server.on('connection', (socket) => {
  let client = new Client(socket);
  socket.write('Hello socket, welcome to this chatbox!\n');
  console.log(`${client.nickname} connected to chat!`);

  clientPool = [...clientPool, socket];

  let handleDisconnect = () => {
    console.log(`${client.nickname} has left the chat.`);
    clientPool = clientPool.filter(item => item !==socket);
  };

  socket.on('error', handleDisconnect);
  socket.on('close', handleDisconnect);

  socket.on('data', (buffer) => {
    let data = buffer.toString();

    if(data.startsWith('/dm')) {
      let username = data.split('')[1];
      let matchedUsers = clientPool.filter;
      let user =
      content = content.trim();
      clientPool.filter(client);

    }

    // if(data.startsWith('/troll')) {
    //   let content = data.split('/dm')[1] || '';
    //   console.log('line 29', client);
    //   clientPool.filter(client);
    // }

    if(data.startsWith('/nick')) {
      let content = data.split('/nick')[1] || '';
      client.nickname = content;
    }

    clientPool.forEach((item) => {
      item.write(`${client.nickname}: ${data}`);

    });

    if(data.startsWith('/quit')) {
      socket.end();
    }
  });
});

server.listen(3000, () => {
  console.log('server up on port 3000');
});
