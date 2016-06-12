'use strict';
module.exports = function (input, opts) {
  var Consts = require('./consts.js');
  var parseRelativeDate = Consts.parseRelativeDate;

  var expenseObject = {
    reason: input[2],
    category: opts.c,
    date: opts.d,
    credit: '',
    debit: ''
  };

  // validation step
  // make sure that everything is as it should be before proceeding

  if (expenseObject.date) {
    var dateRe = /(\d{4})-(\d{2})-(\d{2})/;
    var matchObject = expenseObject.date.match(dateRe);
    if (!matchObject) {
      var relativeDate = parseRelativeDate(expenseObject.date);
      if (relativeDate[0]) {
        expenseObject.date = require('date-format').asString('yyyy-MM-dd', relativeDate[1]);
      } else {
        throw new Error(Consts.MSG_INVALID_DATE);
      }
    }
  } else {
    expenseObject.date = require('date-format').asString('yyyy-MM-dd', new Date());
  }

  // end validation step

  if (input[0] === 'file_path') {
    // open the wallet file in `less`
    console.log(Consts.WALLET_FILE_PATH);
    process.exit(0);
  }

  if (input[0] === 'credit' || input[0] === 'debit') {
    if (input.length < 3 || typeof input[1] !== 'number') {
      throw new Error(Consts.MSG_ERR_CREDIT_DEBIT_TRANS);
    }
  }

  if (input[0] === 'stash' || input[0] === 'unstash') {
    if (input.length < 2) {
      throw new Error(Consts.MSG_ERR_STASH_TRANS);
    } else if (typeof input[1] !== 'number') {
      throw new Error(Consts.MSG_ERR_STASH_TRANS);
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
      throw new Error(Consts.MSG_INVALID_OPTION);
  }
};
