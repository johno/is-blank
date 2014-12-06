var isEmpty = require('is-empty');
var isWhitespace = require('is-whitespace');

module.exports = function isBlank(object) {
  if(typeof object == 'string') {
    return isWhitespace(object);
  } else {
    return isEmpty(object);
  }
};
