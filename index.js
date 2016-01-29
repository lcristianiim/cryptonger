var password = process.argv[2],
    file = process.argv[3],
    text = process.argv[4],
    Encrypt = require('./lib/encrypt'),
    Decrypt = require('./lib/decrypt');

// TO DO
// action not to be based on number of arguments
if (text) {
    Encrypt(password, file, text);
} else {
    Decrypt(password, file);
}
