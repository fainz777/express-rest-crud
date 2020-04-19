const boardsRepo = require('./board.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const createBoard = board => boardsRepo.createBoard(board);

const updateBoard = board => boardsRepo.updateBoard(board);

const deleteBoard = async boardId => {
  await boardsRepo.deleteBoard(boardId);

  const tasks = await tasksRepo.getAll(boardId);

  tasks.map(async task => {
    await tasksRepo.deleteTask(boardId, task.id);
  });
};

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoard,
  deleteBoard
};
