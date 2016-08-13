#!/usr/bin/env node
'use strict';
var meow = require('meow');
var clc = require('cli-color');
var terminalWallet = require('./');

var cli = meow({
  help: [
    'Usage',
    '  wallet debit <value> <purchase details> [-c <category>][-d <date in yyyy-mm-dd format>]',
    '  wallet credit <value> <source details> [-c <category>][-d <date in yyyy-mm-dd format>]',
    '  wallet stats',
    '  wallet export',
    '  wallet clear',
    '',
    'Example',
    "  wallet debit 10 'Breakfast, Coffee at Canteen' -c 'Food'",
    '',
    '  ✔ Expense written to file!',
    '',
    "  wallet credit 2000 'Salary for July 2015' -c 'Salary'",
    '',
    '  ✔ Expense written to file!',
    '',
    '  wallet stats',
    '',
    '  Total Credit : 13920',
    '  Total Debit  : 590',
    '  Balance      : 13330',
    '  Stashed      : 0',
    '',
    '',
    '  wallet export',
    '',
    '  ✔ Your file can be found at',
    '  /home/siddharth/.local/share/wallet/exported/export-2015-07-06.csv',
    '',
    '  wallet clear',
    '',
    '  ✔ Account closed. Expense details have been exported to :-',
    '  /home/siddharth/.local/share/wallet/closed/closed-2015-07-06.csv',
    '  Prepared a clean slate, for the next accounting period.',
    '',
    '  wallet-open # or just wo',
    '    This will open the wallet csv file in a less session, in a',
    '    in a reverse chronographic order, which is convenient for viewing',
    '    latest transactions',
    '',
    '  wallet file_path',
    '    Shows the file path of the wallet expenses file. Can be used to',
    '    see it in your editor of choice. Editing it is not advised',
    '',
    'Options',
    "  -c Category   ; Default: ''          ; Optional",
    "  -d yyyy-mm-dd ; Default: Today's date; Optional"
  ].join('\n')
});

try {
  terminalWallet(cli.input, cli.flags);
} catch (err) {
  console.log(clc.red(err.message));
  process.exit(1);
}
