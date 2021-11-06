/* Este archivo crea una instancia de socket.io y permite compartirla */
const socketIO = require("socket.io");
const socket = {};
function connect(server) {
  socket.io = socketIO(server);
}

module.exports = {
  connect,
  socket,
};
