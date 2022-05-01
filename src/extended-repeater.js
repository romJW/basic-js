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
  
  if (options.separator == undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = "|";

    function func(str='', separator, repeatTimes=1) {
       let resultArr = [];
      for (let i = 0; i < repeatTimes; i++) {
        resultArr.push(String(str));
      }
        return resultArr.join(separator);

    }

    options.separator = func(options.addition,  options.additionSeparator, options.additionRepeatTimes) + options.separator;

    return func(str, options.separator,options.repeatTimes) + func(options.addition,  options.additionSeparator, options.additionRepeatTimes);
}

module.exports = {
  repeater
};
