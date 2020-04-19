const tasksRepo = require('./task.db.repository');

const getAll = async boardId => tasksRepo.getAll(boardId);

const getById = async (boardId, taskId) => tasksRepo.getById(boardId, taskId);

const getByUserId = async userId => tasksRepo.getByUserId(userId);

const createTask = async (boardId, task) => {
  task.boardId = boardId;
  return tasksRepo.createTask(task);
};

const updateTask = async (boardId, taskId, task) =>
  tasksRepo.updateTask(boardId, taskId, task);

const deleteTask = async (boardId, taskId) =>
  tasksRepo.deleteTask(boardId, taskId);

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
  getByUserId
};
