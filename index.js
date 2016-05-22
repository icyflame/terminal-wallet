'use strict';
module.exports = function (input, opts) {
  var clc = require('cli-color');
  var consts = require('./consts.js');

  var expenseObject = {
    reason: input[2],
    category: opts.c,
    date: opts.d,
    credit: '',
    debit: ''
  };

  if (input[0] === 'file_path') {
    // open the wallet file in `less`
    console.log(consts.WALLET_FILE_PATH);
    process.exit(1);
  }

  if (input[0] === 'credit' || input[0] === 'debit') {
    if (input.length < 3 || typeof input[1] !== 'number') {
      console.log(clc.red('Given input not enough or cannot be parsed.'));
      console.log('Use commands of the form: ' + clc.green('wallet debit 10 "Coffee"'));
      process.exit(1);
    }
  }

  if (input[0] === 'stash' && input[0] === 'unstash') {
    if (input.length < 2 || typeof input[1] !== 'number') {
      console.log(clc.red('Given input not enough or cannot be parsed.'));
      console.log('Use commands of the form: ' + clc.green('wallet stash 500'));
      process.exit(1);
    }
  }

  switch (input[0]) {
    case 'debit':
      expenseObject.debit = input[1];
      require('./file-module.js').writeExpense(expenseObject);
      break;
    case 'credit':
      expenseObject.credit = input[1];
      require('./file-module.js').writeExpense(expenseObject);
      break;
    case 'stats':
      require('./stats-module.js').showStats();
      break;
    case 'clear':
      require('./close-account.js').closeAccount();
      break;
    case 'export':
      require('./export-module.js').exportToFile();
      break;
    case 'stash':
    case 'unstash':
      require('./stash-module.js').stashUnstash(input[0], input[1]);
      break;
    default:
      console.log(clc.red('Not a valid option!'));
      process.exit(1);
  }
};
