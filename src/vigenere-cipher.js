const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(x) {
    this.metod = x;
    this.en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    this.square = this.vigenereSquare()
  }

  vigenereSquare() {
    let square = []
    for (let i = 0; i < this.en.length; i++) {
      square[i] = this.en.slice(i).concat(this.en.slice(0, i))
    }
    return square
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined){
      throw Error('Incorrect arguments!')
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    let j = 0
    let result = []
      for (let i = 0; i < message.length; i++) {
        if (message[i].match(/[A-Z]/) === null) {
          result.push((message[i]))
        } else {
           if (j >= key.length) {
            j = 0
          }
          let indexCol = this.en.indexOf(key[j])
          let indexRow = this.en.indexOf(message[i])
          result.push(this.square[indexCol][indexRow])
          j++
        }
      }
    if (this.metod === true || this.metod === undefined) {
      return result.join('')
    } else if (this.metod === false) {
      return result.reverse().join('')
    }

  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw Error('Incorrect arguments!')
    }
    message = message.toUpperCase()
    key = key.toUpperCase()
    let j = 0
    let result = []
    for (let i = 0; i < message.length; i++) {
      if (message[i].match(/[A-Z]/) === null) {
        result.push((message[i]))
      } else {
        if (j >= key.length) {
          j = 0
        }
        let indexCol = this.en.indexOf(key[j])
        let index = this.square[indexCol].indexOf(message[i])
        result.push(this.en[index])
        j++
      }
    }
    if (this.metod === true || this.metod === undefined) {
      return result.join('')
    } else if (this.metod === false) {
      return result.reverse().join('')
    }
   
  }

}

module.exports = {
  VigenereCipheringMachine
};
