const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let ob = {}

  for (let i = 0; i < domains.length; i++) {
    let arLitl = domains[i].split('.')
    let elem = ''
    for (let j = 0; j < arLitl.length; j++) {
      elem = `${elem}.${arLitl[arLitl.length - 1 - j]}`
      console.log(elem)
      if (ob[elem] === undefined) {
        ob[elem] = 1
      } else {
        ob[elem]++
      }
    }
  }
  return ob
}

module.exports = {
  getDNSStats
};
