const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    let array = [];

    if (str[i] != str.charAt(i + 1)) {
      count += 1;
      if (count != 1) {
        array.push(count);
      }
      array.push(str[i]);
    } else {
      while (str[i] === str.charAt(i + 1)) {
        count += 1;
        i++;
      }
      count += 1;
      array.push(count);
      array.push(str[i]);
    }

    result.push(array);
  }

  return result.flat().join('');
}

module.exports = {
  encodeLine
};
