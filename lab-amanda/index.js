'use strict' ;

const net = require('net');
const server = net.createServer();

// let clientPool = [];
//
// server.on('connection', (user) => {
//   user.write('Hello user, welcome to this chatbox!\n');
//   user.nickname = `user_${Math.random()}`;
//   console.log(`${user.nickname} connected to chat!`);
//
//   clientPool = [...clientPool, user];
//
//   let handleDisconnect = () => {
//     console.log(`${user.nickname} has left the chat.`);
//     clientPool = clientPool.filter(item => item !==user);
//   };
//
//   user.on(`error`, handleDisconnect);
//   user.on('close', handleDisconnect);
//
//   user.on('data', (buffer) => {
//     let data = buffer.toString();
//     if(data.startsWith('/nickname ')){
//       user.nickname = data.split('/nickname ')[1] || user.nickname;
//       user.nickname = user.nickname.trim();
//       user.write(`your chat name is now ${user.nickname}`);
//       return;
//     }
//
//     if(data.startsWith('/dm')) {
//       let content = data.split('/dm')[1] || '';
//     }
//
//     clientPool.forEach((item) => {
//       item.write(`${user.nickname}: ${data}`);
//     });
//   });
// });

server.listen(3000, () => {
  console.log('server up on port 3000');
});
