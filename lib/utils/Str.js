const Text = require('../Classes/Text');

function call(m, ...args) {
  return new Text(...args)[m]().value
}

module.exports = {
  first: (str, options = {}) => call('first', str, options),
  removeFirst: (str, options = {}) => call('removeFirst', str, options),
  capitalizeFirst: (str, options = {}) => call('capitalizeFirst', str, options),
}
