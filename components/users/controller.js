const store = require("./store");

function addUser(nameUser) {
  return new Promise((resolve, reject) => {
    if (!nameUser) {
      console.log("Error el nombre del usuario es incorrecto");
      return reject("Datos no válidos");
    }
    const user = {
      name: nameUser,
    };
    store.addUser(user);
    resolve(user);
  });
}
function getUsers(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.getUsers(filterUser));
    reject("No existen usuarios con ese nombre");
  });
}

module.exports = {
  addUser,
  getUsers,
};
