const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} num
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(num) {

  
  let arr = String(num).split("").map(el=>+el);

  let newArr = [];
   
   let newNum = arr.reduce((current, next) =>current+next);
   newArr = String(newNum).split("");
        
   if(newArr.length!==2){
     return +newNum;
   }
   else return newArr.map(el=>+el).reduce((current, next) =>current+next);

}

module.exports = {
  getSumOfDigits
};
