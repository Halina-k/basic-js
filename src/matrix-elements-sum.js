const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let res = 0
  // console.log(matrix[0])

  for (let j = 0; j < matrix[0].length; j++){
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] === 0) {
        if (j === matrix[0].length - 1) {
          break
        } else {
          i = -1
          j++
        }
      } else {
        res = res + matrix[i][j]
      }

    }
  }
return res
}

module.exports = {
  getMatrixElementsSum
};
