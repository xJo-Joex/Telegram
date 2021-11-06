const Model = require("./model");

function addMessage(message) {
  // return list.push(message);
  const myMessage = new Model(message);

  myMessage.save();
}

function getMessage(filterUser) {
  return new Promise(async (resolve, reject) => {
    let filter = {};
    if (filterUser !== null) {
      //al poner user, itera dentro de este array y trae tods los objetos generales que lo contengan
      filter = {
        chat: filterUser,
      };
    }
    console.log(filter);
    //aqui estaba 'user
    Model.find(filter)
      .populate("user") // a este campo le hago join de la otra coleccion
      .exec((error, populated) => {
        if (error) {
          console.log("hola");
          reject(error);
          return false;
        }
        console.log(populated);
        resolve(populated);
      });
  });
}
async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText,
  removeMessage,
  //get
  //update
  //delete
};
