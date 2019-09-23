const chalk = require('chalk');

const error = (...args) => console.error(chalk.hex('#ff5555')(...args));
const info = (...args) => console.log(chalk.hex('#f8f8f2')(...args));
const success = (...args) => console.info(chalk.hex('#50fa7b')(...args));
const warn = (...args) => console.warn(chalk.hex('#f1fa8c')(...args));

module.exports = {
  error,
  info,
  success,
  warn
};
