# crypt-to-file

The module encrypts and decrypts text using a password. By default uses the aes-256-ctr algorithm

## Installation

```sh
$ npm i crypt-to-file
```

## Example

```js
const crypter = require("crypt-to-file");

// Encrypt the text using the password "123456"
console.log(crypter.encrypt("Cool text to be crypted", "123456")); // 'b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5'
// Decrypt the text using the password "123456"
console.log(crypter.decrypt("b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5", "123456")); // 'Cool text to be crypted'

```

## Documentation

### `encrypt(text, password)`
Encrypts string.

#### Params
- **String** `text`: The string to be encrypted.
- **String** `password`: The password used for encryption

#### Return
- **String** Encrypted string.

### `decrypt(text, password)`
Decrypts string.

#### Params
- **String** `text`: The string to be decrypted.
- **String** `password`: The password used for decryption.

#### Return
- **String** Decrypted string.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
See the [LICENSE][license] file.

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
