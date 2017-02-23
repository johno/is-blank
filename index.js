const isEmpty = require('is-empty')
const isWhitespace = require('is-whitespace')

const isString = object => typeof object === 'string'

module.exports = object => isString(object) && object.length ? isWhitespace(object) : isEmpty(object)
