var crypto = require('crypto'),
    algorithm = 'aes-256-ctr';


/**
 * encrypt
 * Creates encrypted string based on a password string.
 *
 * @name encrypt
 * @function
 * @param {String} password A string that will be used as password.
 * @param {String} text The string that will be encrypted.
 *
 * @returns {String} Crypted string
 *
 */
function encrypt (password, text){
    var cipher = crypto.createCipher(algorithm, password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}


/**
 * decrypt
 * Creates decrypted string based on a password string.
 *
 * @name decrypt
 * @function
 * @param {String} password A string that will be used as password.
 * @param {String} text The string that will be decrypted.
 *
 * @returns {String} Decrypted string
 *
 */
function decrypt (password, text){
    var decipher = crypto.createDecipher(algorithm, password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}

module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
}
