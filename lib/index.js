const crypto = require('crypto')
    , algorithm = "aes-256-ctr"
    ;

/**
 * encrypt
 * Encrypts string.
 *
 * @name encrypt
 * @function
 * @param {String} text The string to be encrypted.
 * @param {String} password The password used for encryption
* @returns {String} Encrypted string.
 */
function encrypt(text, password) {
	var cipher = crypto.createCipher(algorithm,password)
	var crypted = cipher.update(text,'utf8','hex')
	crypted += cipher.final('hex');
	return crypted;
}

/**
 * decrypt
 * Decrypts string.
 *
 * @name decrypt
 * @function
 * @param {String} text The string to be decrypted.
 * @param {String} password The password used for decryption.
* @returns {String} Decrypted string.
 */
function decrypt(text, password) {
	var decipher = crypto.createDecipher(algorithm,password)
	var dec = decipher.update(text,'hex','utf8')
	dec += decipher.final('utf8');
	return dec;
}

exports.encrypt = encrypt;
exports.decrypt = decrypt;
