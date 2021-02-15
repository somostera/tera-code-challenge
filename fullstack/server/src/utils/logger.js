class Logger {
    static info(logText) {
      console.log(new Date() + " - info ::::: " + logText);
    }
    static debug(logText) {
      console.log(new Date() + " - debug ::::: " + logText);
    }
    static error(logText) {
      console.log(new Date() + " - error ::::: " + logText);
    }
  }
  module.exports = Logger;