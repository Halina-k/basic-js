const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  start: [],
  getLength() {
    return this.start.length
  },
  addLink(value) {
    if(typeof value === undefined) {
      this.start.length = this.start.length + 1;
    }
    this.start.push(value)
    return this
  },
  removeLink(position) {
    if(position <= 0 || position > this.start.length || typeof position !== "number" || Number.isInteger(position) !== true ) {
      this.start = [];
      throw Error("You can't remove incorrect link!")
    }
    this.start.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.start.reverse()
    return this
  },
  finishChain() {
    let result = "( " + this.start[0] + " )"
    for(i = 1; i < this.start.length; i++) {
      result = result + "~~( " + this.start[i] + " )";
    }
    this.start = [];
    return result
  }
};

module.exports = {
  chainMaker
};
