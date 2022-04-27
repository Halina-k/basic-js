const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  try {
    let test = date.getUTCDate()
    }
  catch (error) {
    throw Error('Invalid date!')
    }
  let m = date.getMonth()
  if(m === 11 || m < 2) {
    return "winter"
  } else if(m !== 0 && m < 5) {
    return 'spring'
  } else if(m >= 5 && m <=7) {
    return 'summer'
  } else {
    return 'autumn'
  }
}

module.exports = {
  getSeason
};
