const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = '';
  let partOfTheResult = str;
  let partOfTheResultLength;

  str = typeof str === 'string' ? str : String(str);

  let separator = options.hasOwnProperty('separator') ? options.separator : '+';
  let additionSeparator = options.hasOwnProperty('additionSeparator') ? options.additionSeparator : '|';
  let repeatTimes = options.hasOwnProperty('repeatTimes') ? options.repeatTimes : 1;
  let addition = options.hasOwnProperty('addition') ? options.addition : '';
  let additionRepeatTimes = options.hasOwnProperty('additionRepeatTimes') ? options.additionRepeatTimes : 1;

  while (repeatTimes > 0) {
    let substring = str + createAddition(addition, additionRepeatTimes, additionSeparator);

    if (result === '') {
      result += substring;
    } else {
      result += separator + substring;
    }

    repeatTimes -= 1;
  }

  return result;
}

function createAddition(addition, additionRepeatTimes, additionSeparator) {
  let str = '';

  while (additionRepeatTimes > 0) {
    if (str === '') {
      str += addition;
    } else {
      str += additionSeparator + addition;
    }

    additionRepeatTimes -= 1;
  }

  return str;
}

module.exports = {
  repeater
};
