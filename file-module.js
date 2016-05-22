'use strict';
var delimiter = ',';

function writeExpense (expenseObjectParam) {
  var xdgBasedir = require('xdg-basedir');
  var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';
  var fs = require('fs');
  var logSymbols = require('log-symbols');
  var prettyDate = expenseObjectParam.date || require('date-format').asString('yyyy-MM-dd', new Date());

  var record = [
    prettyDate,
    expenseObjectParam.reason,
    expenseObjectParam.category,
    expenseObjectParam.credit,
    expenseObjectParam.debit
  ].join(delimiter);

  fs.appendFile(expensesFilepath, record + '\n', function (err) {
    if (err) {
      throw (err);
    } else {
      console.log('\n' + logSymbols.success + ' Expense written to file!' + '\n');
    }
  });
}

exports.writeExpense = writeExpense;
