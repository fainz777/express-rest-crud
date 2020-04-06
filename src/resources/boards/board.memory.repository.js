const { Board } = require('./board.model');

const boards = [];

const getAll = async () => {
  return boards;
};

const getById = async id => {
  return boards.find(board => board.id === id);
};

const createBoard = async board => {
  const boardCreated = new Board({ ...board });
  boards.push(boardCreated);

  return boardCreated;
};

const updateBoard = async boardUpdated => {
  const i = boards.findIndex(board => board.id === boardUpdated.id);

  boards[i].title = boardUpdated.title;
  boards[i].columns = boardUpdated.columns;

  return boards[i];
};

const deleteBoard = async boardId => {
  const i = boards.findIndex(board => board.id === boardId);
  boards.splice(i, 1);
};

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoard,
  deleteBoard
};
