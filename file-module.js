'use strict';
var delimiter = ',';

function getPrettyDate () {
  var now = new Date();
  return now.getFullYear().toString() + '-' +
         now.getMonth().toString() + '-' +
         now.getDate().toString();
}

function writeExpense (expense_object) {
  var xdgBasedir = require('xdg-basedir');
  var filename = xdgBasedir.data + '/wallet/expenses.csv';
  var fs = require('fs');
  var logSymbols = require('log-symbols');

  var record = [
    getPrettyDate(),
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
