const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let rez = []

  for (i = 0; i < matrix.length + 2; i++) {
    rez.push([])
    for (j = 0; j < matrix[0].length + 2; j++)
      rez[i].push(0)    
  }


  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) {
        
        for(let k = i - 1; k <= i + 1; k++) {
          for (let d = j - 1; d <= j + 1; d++) {
            if((k+1) === (i+1) && (d+1) === (j+1)) {
              console.log('lkk')
              rez[k + 1][d + 1] = rez[k + 1][d + 1]
            } else {
              rez[k + 1][d + 1]++
            }
          }
        }
        }
      }
    
  }
  let result = []
  let resRow =  rez.slice(1, rez.length-1)
  for (i = 0; i < resRow.length; i++){
    itemCol = resRow[i].slice(1, resRow[i].length - 1)
    result.push(itemCol)
  }
  return result
}

module.exports = {
  minesweeper
};
