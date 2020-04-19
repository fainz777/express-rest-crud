const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const logger = require('./middlewares/requestLogger');
const userRouter = require('./resources/users/user.router');
const borderRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const errorHandler = require('./middlewares/errorHandler');
const LoggerService = require('./services/loggerService');
const loggerService = new LoggerService();

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const connectDb = require('./db/db.connector.js');

connectDb(() => {
  app.use(express.json());

  app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

  app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
      res.send('Service is running!');
      return;
    }
    next();
  });

  app.use(logger);

  app.use('/users', userRouter);
  app.use('/boards', borderRouter);
  app.use('/boards', taskRouter);

  app.use(errorHandler);

  process.on('uncaughtException', err => {
    loggerService.error(
      500,
      `Uncaught Exception: ${err.message}, ${err.stack}`
    );
  });

  process.on('unhandledRejection', (reason, promise) => {
    loggerService.error(500, `Unhandled Rejection: ${promise} / ${reason}`);
  });

  // throw Error('Oops!');
  // Promise.reject(Error('Oops!'));
});

module.exports = app;
