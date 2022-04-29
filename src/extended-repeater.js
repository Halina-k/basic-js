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
  str = String(str);
  addition = String(options.addition) || '';
  repeatTimes = options.repeatTimes || 0;
  additionRepeatTimes = options.additionRepeatTimes || 0;
  separator = options.separator || '+';
  additionSeparator = options.additionSeparator || '|';


  let result = []
  let podresult = []
  for (i = 0; i < additionRepeatTimes; i++) {
    podresult.push(addition)
    podresult.push(additionSeparator)
  }
  podresult.pop()
  podresult = podresult.join('')

  for (i = 0; i < repeatTimes; i++) {
    result.push(str)
    result.push(podresult)
    result.push(separator)
  }
  result.pop()
  result = result.join('')
  return result

}

module.exports = {
  repeater
};
