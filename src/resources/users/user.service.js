const usersRepo = require('./user.db.repository');
const taskService = require('../tasks/task.service');

const getAll = async () => await usersRepo.getAll();

const getById = async id => await usersRepo.getById(id);

const createUser = async user => await usersRepo.createUser(user);

const updateUser = async user => await usersRepo.updateUser(user);

const deleteUser = async id => {
  const result = await usersRepo.deleteUser(id);

  const userTasks = await taskService.getByUserId(id);
  const tasks = [];

  userTasks.map(task => {
    task.userId = null;
    tasks.push(taskService.updateTask(task.boardId, task.id, task));
  });

  await Promise.all(tasks);

  return result;
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser
};
