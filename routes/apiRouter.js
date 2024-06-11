const express = require('express');
const apiRouter = express.Router();
const logger = require('../app/libs/logger');

// Routes status de l'api
apiRouter.get('/status', (req, res,) => {
  logger.info('Checking the API status: Everything is OK');
  res.status(200).send({
    status: 'UP',
    message: 'The API is up and running!'
  });
});

// Route for testing logger levels
apiRouter.get('/log', (req, res) => {
  // Send a response after all the logging is done
  res.status(200).send('Logs have been recorded!');
  // Test logging at various levels
  logger.off('Test log: OFF level');    // Supposant que 'off' est un niveau de logging
  logger.fatal('Test log: FATAL level'); // Logging at fatal level
  logger.error('Test log: ERROR level'); // Logging at error level
  logger.warn('Test log: WARN level');   // Logging at warn level
  logger.info('Test log: INFO level');   // Logging at info level
  logger.debug('Test log: DEBUG level'); // Logging at debug level
  logger.silly('Test log: SILLY level'); // Logging at silly level
  logger.trace('Test log: TRACE level'); // Logging at trace level
  logger.http('Test log: HTTP level');   // Logging at http level
  logger.verbose('Test log: VERBOSE level'); // Logging at verbose level
});


module.exports = apiRouter;
