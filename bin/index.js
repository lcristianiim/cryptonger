#!/usr/bin/env node

var
    action = process.argv[2],
    password = process.argv[3],
    text = process.argv[4],
    cryptonger = require('../lib/cryptonger');

    if (action == 'encrypt')  {
        console.log(cryptonger.encrypt(password, text));
    } else if (action == 'decrypt') {
        console.log(cryptonger.decrypt(password, text));
    } else {
        console.log('Please specify an action: encrypt or decrypt');
    }

