const fs = require("fs");
const moment = require("moment");

class Logger {
  constructor(filePath = 'logs/log.txt') {
    this.filePath = filePath;
  }

  getTime() {
    return moment().format('YYYY-MM-DD HH:mm:ss');
  }

  writeLog(message) {
    fs.appendFileSync(this.filePath, message, { flag: 'a+' });
  }

  middleware() {
    return (req, res, next) => {
      const formattedDate = this.getTime();
      const logMessage = `[${formattedDate}] ${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}\n`;
      this.writeLog(logMessage);
      next();
    };
  }
}

module.exports = Logger;
