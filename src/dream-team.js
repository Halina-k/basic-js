const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (Array.isArray(members) === false) { // tyof xxx === .. ; if (members instanceof Array)
    return false
  }
  let name = members.filter((item) => {
    if (typeof item === 'string' && item.match(/\d/g) === null) {
      return item
    }
  })

  return name.map((a) => a.match(/[a-zA-Z]/).join('').toUpperCase()).sort().join('')
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
