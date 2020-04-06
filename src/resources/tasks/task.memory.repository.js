const Task = require('./task.model');

const tasks = [];

const getAll = async boardId => {
  return await tasks.filter(task => task.boardId === boardId);
};

const getById = async (boardId, taskId) => {
  return await tasks.find(
    task => task.boardId === boardId && task.id === taskId
  );
};

const getByUserId = async userId => {
  return await tasks.filter(task => task.userId === userId);
};

const createTask = async task => {
  const taskCreated = new Task({ ...task });

  tasks.push(taskCreated);

  return taskCreated;
};

const updateTask = async (boardId, taskId, taskUpdated) => {
  const i = tasks.findIndex(
    task => task.boardId === boardId && task.id === taskId
  );

  tasks[i].title = taskUpdated.title;
  tasks[i].order = taskUpdated.order;
  tasks[i].description = taskUpdated.description;
  tasks[i].userId = taskUpdated.userId;
  tasks[i].boardId = taskUpdated.boardId;
  tasks[i].columnId = taskUpdated.columnId;

  return tasks[i];
};

const deleteTask = async (boardId, taskId) => {
  const i = tasks.findIndex(
    task => task.boardId === boardId && task.id === taskId
  );
  tasks.splice(i, 1);
};

module.exports = {
  getAll,
  getById,
  createTask,
  updateTask,
  deleteTask,
  getByUserId
};
