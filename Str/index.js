const Text = require('../Text');

function call(m, ...args) {
  return new Text(...args)[m]().value
}

first = (str, options = {}) => call('first', str, options);
removeFirst = (str, options = {}) => call('removeFirst', str, options);
capitalizeFirst = (str, options = {}) => call('capitalizeFirst', str, options);

exports.first = first;
exports.removeFirst = removeFirst;
exports.capitalizeFirst = capitalizeFirst;

module.exports = {
  first,
  removeFirst,
  capitalizeFirst,
}
