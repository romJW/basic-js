const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  
  calculateDepth(arr) {
    let num = 1;
    const newArr = [];
        if (arr.some(el=>Array.isArray(el))==true){
         const newArr = arr.flat();
          return num + this.calculateDepth(newArr);    
             } 
        return num;   
            
    }



}

module.exports = {
  DepthCalculator
};
