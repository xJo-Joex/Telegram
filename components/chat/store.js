const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

async function listChats(userId) {
  return new Promise( (resolve, reject) => {
    let filter = {};
   if (userId!==null) {
     //al poner users trae todos los chats donde participe ese usuario, buscando en el array de users
    filter = {
        users: userId,
      };
    }
    Model.find(filter)
      .populate("users")
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChats,
};

/* const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function getChat(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = {
        users: userId,
      };
    }
    resolve(Model.find());
        .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      }); 
    // console.log(filter)
  });
}

module.exports = {
  getChat,
  addChat,
};
 */
