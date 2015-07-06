'use strict';

function closeAccount () {
  var xdgBasedir = require('xdg-basedir');
  var logSymbols = require('log-symbols');
  var trash = require('trash');
  var clc = require('cli-color');
  var prettyDate = require('date-format').asString('yyyy-MM-dd', new Date());

  var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';

  var exportedFileName = xdgBasedir.data +
                          '/wallet/closed/closed-' +
                          prettyDate + '.csv';

  require('./export-module.js')
    .exportToFile(exportedFileName, false);

  trash([expensesFilepath], function (err) {
    if (err) {
      console.log(require('util').inspect(err, { depth: null }));
    } else {
      require('./setup-files.js');
      console.log([
        '',
        logSymbols.success + ' Account closed. Expense details have been exported to :-',
        clc.blue(exportedFileName),
        'Prepared a clean slate, for the next accounting period.',
        ''
      ].join('\n'));
    }
  });
}

exports.closeAccount = closeAccount;
