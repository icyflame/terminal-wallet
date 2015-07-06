'use strict';
module.exports = function (input, opts) {
  var clc = require('cli-color');

  var expense_object = {
    reason: input[2],
    category: opts.c,
    credit: '',
    debit: ''
  };

  if (input[0] === 'credit' || input[0] === 'debit') {
    if (input.length < 3 || typeof input[1] !== 'number') {
      console.log(clc.red('Given input not enough cannot be parsed.'));
      console.log('Use commands of the form: ' + clc.green('wallet debit 10 "Coffee"'));
      process.exit(1);
    }
  }

  switch (input[0]) {
    case 'debit':
      expense_object.debit = input[1];
      require('./file-module.js').writeExpense(expense_object);
      break;
    case 'credit':
      expense_object.credit = input[1];
      require('./file-module.js').writeExpense(expense_object);
      break;
    case 'stats':
      require('./stats-module.js')();
      break;
    case 'balance':
      break;
    case 'export':
      require('./export-module.js')();
      break;
    default:
      console.log(clc.red('Not a valid option!'));
      process.exit(1);
  }
};
