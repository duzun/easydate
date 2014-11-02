'use strict';

function tidyNumber(value) {
  if (value < 10) {
    return '0' + String(value);
  }
  return String(value);
}

function tidyMs(value) {
  if (value < 10) {
    return '00' + String(value);
  }
  if (value < 100) {
    return '0' + String(value);
  }
  return String(value);
}

module.exports = function (pattern) {

  var date = new Date();

  return pattern
    .replace('d', tidyNumber(date.getUTCDate()))
    .replace('M', tidyNumber(date.getUTCMonth() + 1))
    .replace('y', String(date.getUTCFullYear()).substring(2, 4))
    .replace('Y', String(date.getUTCFullYear()))
    .replace('h', tidyNumber(date.getHours()))
    .replace('m', tidyNumber(date.getMinutes()))
    .replace('s', tidyNumber(date.getSeconds()))
    .replace('l', tidyMs(date.getMilliseconds()));

};
