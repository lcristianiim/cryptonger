var crypto = require('crypto'),
    fs = require('fs'),
    algorithm = 'aes-256-ctr';

function decrypt(text, password){
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8');
    return dec;
}


function readFile(file) {
    var data = fs.readFileSync(file, "utf8");
    return data;
}

module.exports = function (password, file) {
    var textToDecript = readFile(file);
    console.log("Mesajul decriptat este:" );
    console.log(decrypt(textToDecript, password));
}
