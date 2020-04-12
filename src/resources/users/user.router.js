const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
const routingService = require('../../services/catchErrors');

router.route('/').get(
  routingService(async (req, res) => {
    const users = await usersService.getAll();

    res.json(users.map(User.toResponse));
  })
);

router.route('/:id').get(
  routingService(async (req, res) => {
    const id = req.params.id;
    const user = await usersService.getById(id);

    if (user) {
      res.json(User.toResponse(user));
    } else {
      res.status(404).json(null);
    }
  })
);

router.route('/').post(
  routingService(async (req, res) => {
    const user = req.body;
    const userCreated = await usersService.createUser(user);

    res.json(User.toResponse(userCreated));
  })
);

router.route('/:id').put(
  routingService(async (req, res) => {
    const user = req.body;

    const userUpdated = await usersService.updateUser(user);

    res.json(User.toResponse(userUpdated));
  })
);

router.route('/:id').delete(
  routingService(async (req, res) => {
    const id = req.params.id;
    await usersService.deleteUser(id);

    res.status(200).json(null);
  })
);

module.exports = router;
