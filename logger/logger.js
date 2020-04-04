const winston = require('winston')
const createLogger = (logger) => {
    return winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: logger + ".log" })
      ]
    });
  };

  module.exports ={
   createLogger: createLogger
  }