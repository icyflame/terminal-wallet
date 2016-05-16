'use strict';
var delimiter = ',';

function writeExpense (expense_object) {
  var xdgBasedir = require('xdg-basedir');
  var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';
  var fs = require('fs');
  var logSymbols = require('log-symbols');
  var prettyDate = expense_object.date || require('date-format').asString('yyyy-MM-dd', new Date());

  var record = [
    prettyDate,
    expense_object.reason,
    expense_object.category,
    expense_object.credit,
    expense_object.debit
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
