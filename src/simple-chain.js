const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  array: [],

  getLength() {
    this.array.length;
  },

  addLink(value) {
    this.array.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== 'number' || !(Number.isInteger(position))  || position < 1 || position > this.array.length) {
      this.array = [];
      throw new Error(`You can't remove incorrect link!`);
    } else {
      this.array.splice(position - 1, 1);
    }
    return this;
  },

  reverseChain() {
    this.array.reverse();

    return this;
  },

  finishChain() {
    let result = '';

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] == undefined) {
        result += `( null )`;
      } else {
        result += `( ${this.array[i]} )`;
      }
      if (i != this.array.length - 1) {
        result += '~~'
      }
    }
    this.array = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
