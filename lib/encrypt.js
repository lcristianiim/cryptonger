var crypto = require('crypto'),
    fs = require('fs'),
    algorithm = 'aes-256-ctr',
    encryptedText;


function encrypt(text, password){
    var cipher = crypto.createCipher(algorithm,password)
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = function (password, file, text) {

    encryptedText = encrypt(text, password);

    fs.writeFile(file, encryptedText, function(err) {
        if(err) {
            return console.log(err);
        }

        console.log("The " + file + " file was saved!");
    });
}

