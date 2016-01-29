const crypter = require("../lib");

// Encrypt the text using the password "123456"
console.log(crypter.encrypt("Cool text to be crypted", "123456")); // 'b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5'
// Decrypt the text using the password "123456"
console.log(crypter.decrypt("b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5", "123456")); // 'Cool text to be crypted'
