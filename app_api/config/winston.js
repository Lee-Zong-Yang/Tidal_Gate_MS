var appRoot = require('app-root-path');
var winston = require('winston');
const { format } = require('logform');

let todayDate = new Date().toLocaleString();
const logFormat = format.printf(function(info) {
  return `${todayDate}(${info.level}): ` + info.message;
});

const levels = { 
  error: 'error',
  warn: 'warn',
  info: 'info',
  http: 'http',
  verbose: 'verbose',
  debug: 'debug',
  silly: 'silly'
};

var options = {
    file: {
      level: 'info',
      filename: `${appRoot}/app_api/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      format: winston.format.combine(winston.format.colorize(), logFormat),
      level: levels.verbose,
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  };

  var logger = winston.createLogger({
    transports: [
      new winston.transports.File(options.file),
      new winston.transports.Console(options.console)
    ],
    exitOnError: false, // do not exit on handled exceptions
  });

  logger.stream = {
    write: function(message, encoding) {
      logger.info(message);
    },
  };

  module.exports = logger;