const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr:[],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position == "number" & position % 1 !== position & this.arr[position-1] != undefined) 
    {
    this.arr.splice(position-1, 1);
    return this;
    } 
    else {
      this.deleteChain();
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const res = this.getChain();
    this.deleteChain();
    return res;

  },
  getChain(){
    return this.arr.join('~~');
  },
  deleteChain(){
    this.arr.length = 0;
  }
  
};

module.exports = {
  chainMaker
};
