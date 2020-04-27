const LoggerService = require('../services/loggerService');
const loggerService = new LoggerService();

function errorHandler(err, req, res, next) {
  if (err) {
    loggerService.error(err.code, err.message, err.stack);

    res.status(err.code).json({
      errorCode: err.code,
      message: err.message
    });

    return;
  }

  next();
}

module.exports = errorHandler;
