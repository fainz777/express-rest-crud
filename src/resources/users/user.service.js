const usersRepo = require('./user.db.repository');
const taskService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const createUser = user => usersRepo.createUser(user);

const updateUser = user => usersRepo.updateUser(user);

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
