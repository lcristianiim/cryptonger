
# `$ cryptonger`

[![cryptonger](http://imgur.com/ymuWQnZ)](#)

The module encrypts and decrypts text using a password. By default uses the aes-256-ctr algorithm

## Installation

```sh
$ npm i cryptonger
```

### CLI Usage
You can install the package globally and use it as command line tool:

```sh
$ npm i -g cryptonger
```

Then, run `cryptonger --help` and see what the CLI tool can do.

```sh
cryptonger encrypt 1234 hello // 138316142c
cryptonger decrypt 1234 138316142c // hello
```

## Example

Here is an example how to use this package as library.

```js
const cryptonger = require("cryptonger/cryptonger");

// Encrypt the text using the password "123456"
console.log(cryptonger.encrypt("123456", "Cool text to be crypted")); // 'b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5'
// Decrypt the text using the password "123456"
console.log(cryptonger.decrypt("123456", "b3e15ab6b57967c72bdcb5a88ce3708adf1167da641db5")); // 'Cool text to be crypted'

```

## Documentation

For full API reference, see the [DOCUMENTATION.md][docs] file.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## License
See the [LICENSE][license] file.

[license]: /LICENSE
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
