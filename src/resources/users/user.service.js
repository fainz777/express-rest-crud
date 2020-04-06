const usersRepo = require('./user.memory.repository');
const taskService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const createUser = user => usersRepo.createUser(user);

const updateUser = user => usersRepo.updateUser(user);

const deleteUser = async id => {
  await usersRepo.deleteUser(id);

  const userTasks = await taskService.getByUserId(id);

  await userTasks.map(async task => {
    task.userId = null;
    // ToDo
    await taskService.updateTask(task.boardId, task.id, task);
  });
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};
