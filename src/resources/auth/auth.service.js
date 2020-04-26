const { JWT_SECRET_KEY } = require('../../common/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersRepo = require('../users/user.db.repository');
const { UserNotFoundError } = require('../../common/errors');

const login = async authData => {
  const user = await usersRepo.getByLogin(authData.login);

  if (user) {
    const isPasswordsMatch = await bcrypt.compare(
      authData.password,
      user.password
    );

    if (isPasswordsMatch) {
      return jwt.sign(
        {
          userId: user._id,
          login: user.login
        },
        JWT_SECRET_KEY
      );
    }
  }

  throw new UserNotFoundError();
};

module.exports = {
  login
};
