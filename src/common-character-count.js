const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let strMin
  let strMax
  if (s1.length <= s2.length) {
    strMin = s1
    strMax = s2
  } else {
    strMin = s2
    strMax = s1
  }

let count = 0
  for (i = 0; i < strMin.length; i++) {
    let re = strMin[i]
    let poz = strMax.search(`${re}`)
    if (poz >= 0) {
      count++
      strMax = strMax.replace(`${strMax[poz]}`, '');

    }
  }
  return count
}

module.exports = {
  getCommonCharacterCount
};
