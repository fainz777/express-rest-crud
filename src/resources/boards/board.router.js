const router = require('express').Router();
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();

  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;

  if (id) {
    const board = await boardService.getById(id);

    res.json(board);
  }
});

router.route('/').post(async (req, res) => {
  const board = req.body;
  const boardCreated = await boardService.createBoard(board);

  res.json(boardCreated);
});

router.route('/:id').put(async (req, res) => {
  const board = req.body;

  const boardUpdated = await boardService.updateBoard(board);

  res.json(boardUpdated);
});

router.route('/:id').delete(async (req, res) => {
  res.json('');
});

module.exports = router;
