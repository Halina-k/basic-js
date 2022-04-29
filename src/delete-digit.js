const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...'' + n].map(Number) 
  let res 
  for (let i = 0; i < arr.length; i++) {
  if(arr[i] < arr[i + 1]) {
    res = i 
    break
  }
  } 
  if (res === undefined) {
    return res = arr.length - 1
  }
 
  arr.splice(res,1)

  return arr.join('') * 1
}

module.exports = {
  deleteDigit
};
