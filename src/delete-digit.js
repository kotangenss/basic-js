const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = String(n);
  let array = [];
  let substr;

  for (let i = 0; i < str.length; i++) {
    if (i === 0) {
      array.push(+(str.slice(1)));
    } else if (i > 0 && i < str.length - 1) {
      substr = +(str.slice(0, i) + str.slice(i + 1));
      array.push(substr);
    } else {
      array.push(+(str.slice(0, -1)));
    }
  }

  array.sort(function (a, b) {
    return b - a;
  });

  return array[0];
}

module.exports = {
  deleteDigit
};
