const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  let str = n.split('-').join('');
  let reg = /[ABCDEF0123456789]/g;

  if (str.match(reg).join('') === str && str.match(reg).join('').length === str.length) {
    return true;
  } else {
    return false;
  }
}
module.exports = {
  isMAC48Address
};
