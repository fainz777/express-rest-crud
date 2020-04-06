const tasksRepo = require('./task.memory.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const getById = (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const getByUserId = userId => tasksRepo.getByUserId(userId);

const createTask = (boardId, task) => {
  task.boardId = boardId;
  return tasksRepo.createTask(task);
};

const updateTask = (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
  getByUserId
};
