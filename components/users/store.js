const Model = require("./model");

async function addUser(dataUser) {
  // console.log(dataUser);
  const userCreated = new Model(dataUser);

  //aqui retornó lo del save()
  const resp = await userCreated.save();
  return resp;
}

async function getUsers(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = {
      name: filterUser,
    };
  }
  const users = await Model.find(filter);
  return users;
}

module.exports = {
  addUser,
  getUsers,
};

