const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
class VigenereCipheringMachine {
  reverse = false;

  constructor(reverse = true) {
    this.reverse = !reverse
  }

  encrypt(message = undefined, key = undefined) {
    if (key === undefined || message === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = [];

    message = message.split('');
    key = key.split('');

    let keyElementIndexes = [];

    key.forEach(el => {
      keyElementIndexes.push(alphabet.indexOf(el.toUpperCase()));
    });

    let count = message.length;
    while (count > keyElementIndexes.length) {
      count--;
      keyElementIndexes = keyElementIndexes.concat(keyElementIndexes)
    }

    keyElementIndexes = keyElementIndexes.slice(0, message.length)

    let i = 0;

    message.forEach((el) => {
      let index = alphabet.indexOf(el.toUpperCase());

      if (index === -1) {
        result.push(el);
      } else {
        let keyIndex = keyElementIndexes[i];
        i++;
        let newIndex = (index + keyIndex) % 26;
        result.push(alphabet[newIndex]);
      }
    });

    return this.reverse ? result.reverse().join('') : result.join('');
  }

  decrypt(encryptedMessage = undefined, key = undefined) {
    if (key === undefined || encryptedMessage === undefined) {
      throw new Error('Incorrect arguments!');
    }
    let result = [];

    encryptedMessage = encryptedMessage.split('');
    key = key.split('');

    let keyElementIndexes = [];

    key.forEach(el => {
      keyElementIndexes.push(alphabet.indexOf(el.toUpperCase()));
    });

    let count = encryptedMessage.length;
    while (count > keyElementIndexes.length) {
      count--;
      keyElementIndexes = keyElementIndexes.concat(keyElementIndexes)
    }

    keyElementIndexes = keyElementIndexes.slice(0, encryptedMessage.length)

    let i = 0;

    encryptedMessage.forEach((el) => {
      let index = alphabet.indexOf(el.toUpperCase());

      if (index === -1) {
        result.push(el);
      } else {
        let keyIndex = keyElementIndexes[i];
        i++;
        let num = (index - keyIndex) <= 0 ? (index - keyIndex + 26) : (index - keyIndex);
        let newIndex = num % 26;
        result.push(alphabet[newIndex]);
      }
    });
    return this.reverse ? result.reverse().join('') : result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
