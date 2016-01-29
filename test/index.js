const crypter = require("../lib")
    , tester = require("tester")
    ;

tester.describe("Crypter aes-256-crt", test => {
    test.should("Encrypt", () => {
        test.expect(crypter.encrypt("Cool text to be crypted", "123456")).toBe('b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5');
    }),
    test.should("Decrypt", () => {
        test.expect(crypter.decrypt("b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5", "123456")).toBe('Cool text to be crypted');
    });
});

