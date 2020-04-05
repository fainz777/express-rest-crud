const User = require('./user.model');

const users = [];
users.push(new User());

const getAll = async () => {
  return users;
};

const getById = async id => {
  return users.find(user => user.id === id);
};

const createUser = async user => {
  const userCreated = new User({ ...user });
  users.push(userCreated);

  return userCreated;
};

const updateUser = async userUpdated => {
  const i = users.findIndex(user => user.id === userUpdated.id);

  users[i].name = userUpdated.name;
  users[i].login = userUpdated.login;
  users[i].password = userUpdated.password;

  return users[i];
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser
};
