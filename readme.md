# terminal-wallet

> Manage your wallet, from the terminal

[![Build Status](https://travis-ci.org/icyflame/terminal-wallet.svg?branch=master)](https://travis-ci.org/icyflame/terminal-wallet)

[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/Flet/semistandard)


### Why?

Not a long time ago, I used a Google Sheet to manage my wallet, and as a matter of
fact, it got tedious soon. Opening the browser, waiting for the page to load,
and not being able to update stuff when there's no connectivity, all of that
has led me to write this small CLI application, that can be used by anyone to
manage their wallet right from the terminal.


## CLI

```
$ npm install --global terminal-wallet
```
```
$ wallet --help

  Usage
    wallet debit <value> <purchase details> [-c <category>]
    wallet credit <value> <source details> [-c <category>]
    wallet export
    wallet clear

  Example
    wallet debit 10 'Breakfast, Coffee at Canteen' -c 'Food'

    ✔ Expense written to file!

    wallet credit 2000 'Salary for July 2015' -c 'Salary'

    ✔ Expense written to file!

    wallet export

    ✔ Your file can be found at
    /home/siddharth/.local/share/wallet/exported/export-2015-07-06.csv

    wallet clear

    ✔ Account closed. Expense details have been exported to :-
    /home/siddharth/.local/share/wallet/closed/closed-2015-07-06.csv
    Prepared a clean slate, for the next accounting period.

  Options
    -c Category ; Default: '' ; Optional
```


## CLI

##### `wallet debit <value> <purchase details> [-c <category>]`

_`Made a purchase of <value> for <purchase details> under the category <category>`_  
Add a debit entry to your account book.

##### `wallet credit <value> <source details> [-c <category>]`

`<value> credited to the wallet from <source details> under the category <category>`  
Add a credit entry to your account book.

##### `wallet export`

Export the current state of your account book to a timestamped file.  
(Path to the file will be printed when the command completes execution)

##### `wallet clear`

Close the account for the last period, and start with a clean slate.  
The expenses will be exported to a timestamped file, and can be retrieved.
(Typically, This operation can be used at the end of each month, or any period that is convenient for the user.)


## License

MIT © [Siddharth Kannan](http://icyflame.github.io)
