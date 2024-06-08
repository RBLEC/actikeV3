const morgan = require(`morgan`);
const logger = require(`../libs/logger`);

const stream = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || `development`;
  return env !== `development`;
};

const morganMiddleware = morgan(
  `:remote-addr - [:date[clf]] - :method - :url - HTTP/:http-version - :status - :res[content-length] kb - :referrer - :user-agent - :response-time ms - :response-time[digits] s `,
  { stream, skip },
  //{ stream },
);

module.exports = morganMiddleware;