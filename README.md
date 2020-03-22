# @jlozovei/trim-currency
A cool JS helper to trim/clean currency values! :money_with_wings:

---

![Coverage](./coverage/badge.svg "Coverage")
![Coverage Branches](./coverage/badge-branches.svg "Coverage Branches")
![Coverage Functions](./coverage/badge-functions.svg "Coverage Functions")
![Coverage Lines](./coverage/badge-lines.svg "Coverage Lines")
![Coverage Statements](./coverage/badge-statements.svg "Coverage Statements")

---


## :scroll: About
If you already have to deal with currency numbers with JS, you know the struggle is real.

After some suffering with it, I decided to develop this helper function to trim/clean currency values, returning them in clean integer values.

No dependencies, no framework restrictions - just plain JS! :rocket:


## :closed_book: Usage
First things first: you need to install the package:

```bash
npm i @jlozovei/trim-currency

# or yarn add @jlozovei/format-money
```

After that, you'll need to import the helper wherever you want to use it:

```js
// es-modules
import trimCurrency from '@jlozovei/trim-currency';

// commonjs
const trimCurrency = require('@jlozovei/trim-currency');
```

Then, you'll be able to use it:

```js
import trimCurrency from '@jlozovei/trim-currency';

const cleanCurrency = trimCurrency('$1,000,000.00'); // 100000000 (as Number)
```


## :computer: Developing
First, fork the project. After it, install the dependencies (preferably using [yarn](https://yarnpkg.com/) - since the project is using it) and do the work.

Also, take a look at the [contributing guide](https://github.com/jlozovei/trim-currency/blob/master/.github/CONTRIBUTING.md)!


## :thinking: I want to use it, but I don't want to install it
Cool! So, the magic under the hood is basically removing all the `non-digits characters` from the string, using a regular expression (a.k.a. RegExp):

```js
const regex = /\D+/g; // \D is the token for non-digits
/*
 * you can also use the RegExp constructor:
 * const regex = new RegExp('\\D+', 'g');
 */

const currency = 'R$ 1.000.000,00';
const clean = currency.replace(regex, ''); // we're replacing the match tokens with nothing
```

### :books: Related
If you need to deal with money/currency using JS, these packages provides nice methods and you should take a look:

- [dinero.js](https://sarahdayan.github.io/dinero.js/)
- [accounting](http://openexchangerates.github.io/accounting.js)
- [currency.js](https://currency.js.org/)
- [money.js](http://openexchangerates.github.io/money.js/)


## :closed_lock_with_key: License
Licensed under the [MIT](https://github.com/jlozovei/trim-currency/blob/master/LICENSE).
