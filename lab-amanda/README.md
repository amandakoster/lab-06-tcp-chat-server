
# lab-06-tcp-chat-server

 This is a super fun project where users can log into a chat room served up through a TCP server via local host port 3000. All users or 'clients' have a unique 'nickname'. At first their nickname is a random number, though they can customize as well.

 To get the project running, a user must run the index.js file in node. This launches the TCP Server. To connect to the chatroom,  the user must enter the command: 'telnet localhost 3000' This connects them to the server.

## Here are a few additional features:
 * `/nick` should allow a user change their nickname
 * `/dm` should allow a user to send a message directly to another user by nick name
 * `/troll` should take in a number and a message and send the message to everyone that number of times
 * `/quit` should close the connection with the user
 * When a socket emits the `close` event the socket is removed from the client pool!
 * When a socket emits the `error` event the error is logged on the server
 * When a socket emits the `data` event the data is logged on the server and the `\wack` commands below should be implemented

Have fun!
