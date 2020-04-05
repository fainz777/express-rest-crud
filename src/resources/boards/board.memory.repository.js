const { Board, Column } = require('./board.model');

const boards = [];
boards.push(new Board());
boards[0].columns.push(new Column());

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

module.exports = {
  getAll,
  getById,
  createBoard,
  updateBoard
};
