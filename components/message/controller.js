const store = require("./store");
const {socket} = require('../../socket');



function addMessage(user, message, chat, file) {
  return new Promise((resolve, reject) => {
    if (!user || !message || !chat) {
      console.error("[usuario, message o chat son erroneós]");
      return reject("Datos incorrectos");
    }
    let fileUrl = "";
    if (file) {
      fileUrl = "http://localhost:3000/app/files/" + file.filename;
    }
    const fullMessage = {
      chat,
      user,
      message,
      date: new Date(),
      file: fileUrl,
    };
    store.add(fullMessage);
    socket.io.emit('message', fullMessage);
    console.log(fullMessage)
    resolve(fullMessage);
  });
}

function getMessages(filterMessages) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterMessages).catch((error) => reject(error)));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}
function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("Id invalido");
      return false;
    }
    store
      .removeMessage(id)
      .then(() => resolve())
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
