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
  if (options.addition !== undefined) {
    addition = String(options.addition)
  } else {
    addition = '';
  }
  repeatTimes = options.repeatTimes || 1;
  additionRepeatTimes = options.additionRepeatTimes || 1;
  separator = options.separator || '+';
  additionSeparator = options.additionSeparator || '|';


  let result = []
  let podresult = []
  for (let i = 0; i < additionRepeatTimes; i++) {
    podresult.push(addition)
  }

  podresult = podresult.join(`${additionSeparator}`)

  for (let i = 0; i < repeatTimes; i++) {
    result.push(str)
    result.push(podresult)
    result.push(separator)
  }
  result.pop()
  result = result
  return result.join('')
}

module.exports = {
  repeater
};
