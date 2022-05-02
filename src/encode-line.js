const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let j = 1
  let res = []
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]){
      j++
    } else {
      res.push(j)
      res.push(str[i])
      j = 1
    }
  }
  return res.filter(item => item !== 1).join('')
}

module.exports = {
  encodeLine
};
