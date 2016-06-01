const cryptonger = require("../lib/cryptonger");

// Encrypt the text using the password "123456"
console.log(cryptonger.encrypt("123456", "Cool text to be crypted")); // 'b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5'
// Decrypt the text using the password "123456"
console.log(cryptonger.decrypt("123456", "b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5")); // 'Cool text to be crypted'
