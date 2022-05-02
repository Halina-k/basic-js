const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (sampleActivity === undefined || 
    typeof sampleActivity !== 'string' || 
    Number.isNaN(sampleActivity * 1) === true ||
    sampleActivity > 15 ||
    sampleActivity <= 0 ) {
    return false
  }
  sampleActivity = sampleActivity * 1
  let HALF_LIFE_PERIOD = 5730
  let MODERN_ACTIVITY = 15
  let k = Math.log(2) / HALF_LIFE_PERIOD

  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k

  return Math.ceil(t)
}

module.exports = {
  dateSample
};
