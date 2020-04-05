const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();

const getById = id => boardRepo.getAll(id);

const createBoard = board => boardRepo.createBoard(board);

const updateBoard = board => boardRepo.updateBoard(board);

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoard
};
