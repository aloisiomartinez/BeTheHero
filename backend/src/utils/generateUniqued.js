const crypto = require('crypto')

module.exports =  function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX') // Gera 4 bytes aleatórios de formato Hexadecimal
}