'use strict';
var delimiter = ',';

function writeExpense (expense_object) {
  var xdgBasedir = require('xdg-basedir');
  var filename = xdgBasedir.data + '/wallet/expenses.csv';
  var fs = require('fs');
  var logSymbols = require('log-symbols');
  var dateFormat = require('date-format');

  var record = [
    dateFormat.asString('yyyy-MM-dd', new Date()),
    expense_object.reason,
    expense_object.category,
    expense_object.credit,
    expense_object.debit
  ].join(delimiter);

  fs.appendFile(filename, record + '\n', function (err) {
    if (err) {
      throw (err);
    } else {
      console.log('\n' + logSymbols.success + ' Expense written to file!' + '\n');
    }
  });
}

exports.writeExpense = writeExpense;
