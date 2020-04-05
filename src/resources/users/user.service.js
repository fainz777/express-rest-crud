const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const createUser = user => usersRepo.createUser(user);

const updateUser = user => usersRepo.updateUser(user);

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser
};
