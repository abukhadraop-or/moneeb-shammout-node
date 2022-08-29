const winston = require('winston');
const { exec } = require('child_process');

/**
 * Subscribes to unhandled errors that occurs outside APIs and logs it when it occurs.
 *
 * @param {string} errorName
 */
module.exports = (errorName) => {
  process.on(errorName, (ex) => {
    console.log(`RESTARTING ${errorName}:${ex}`);

    winston.error(ex.message, {
      action: 'restart',
      statusCode: 500,
      stack: ex.stack,
    });

    exec(`pm2 restart <${process.pid}>`);
  });
};
