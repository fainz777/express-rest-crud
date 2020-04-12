const router = require('express').Router();
const boardService = require('./board.service');
const catchErrors = require('../../services/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const boards = await boardService.getAll();

    res.json(boards);
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const id = req.params.id;

    if (id) {
      const board = await boardService.getById(id);

      if (board) {
        res.json(board);
      } else {
        res.status(404).json(null);
      }
    }
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const board = req.body;
    const boardCreated = await boardService.createBoard(board);

    res.json(boardCreated);
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const board = req.body;

    const boardUpdated = await boardService.updateBoard(board);

    res.json(boardUpdated);
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const id = req.params.id;

    await boardService.deleteBoard(id);

    res.json(null);
  })
);

module.exports = router;
