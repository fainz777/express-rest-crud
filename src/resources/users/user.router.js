const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();

  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const id = req.params.id;

  if (id) {
    const user = await usersService.getById(id);

    res.json(User.toResponse(user));
  }
});

router.route('/').post(async (req, res) => {
  const user = req.body;
  const userCreated = await usersService.createUser(user);

  res.json(User.toResponse(userCreated));
});

router.route('/:id').put(async (req, res) => {
  const user = req.body;

  const userUpdated = await usersService.updateUser(user);

  res.json(User.toResponse(userUpdated));
});

router.route('/:id').delete(async (req, res) => {
  res.json('');
});

module.exports = router;
