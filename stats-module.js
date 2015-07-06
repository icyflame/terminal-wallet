'use strict';
function showStats () {
  var xdgBasedir = require('xdg-basedir');
  var csv = require('fast-csv');
  var fs = require('fs');
  var numberIsNan = require('number-is-nan');
  var clc = require('cli-color');

  var expensesFilename = xdgBasedir.data + '/wallet/expenses.csv';
  var stream = fs.createReadStream(expensesFilename);

  var totalCredit = 0.0;
  var totalDebit = 0.0;

  csv
    .fromStream(stream)
    .transform(function (data) {
      return {
        'date': data[0],
        'reason': data[1],
        'category': data[2],
        'credit': numberIsNan(parseFloat(data[3])) ? 0.0 : parseFloat(data[3]),
        'debit': numberIsNan(parseFloat(data[4])) ? 0.0 : parseFloat(data[4])
      };
    })
    .on('data', function (data) {
      totalDebit += data.debit;
      totalCredit += data.credit;
    })
    .on('end', function () {
      var result = [
        '',
        'Total Credit : ' + clc.blue(totalCredit),
        'Total Debit  : ' + clc.blue(totalDebit),
        clc.green('Balance      : ') + clc.blue(totalCredit - totalDebit),
        ''
      ].join('\n');
      console.log(result);
    });
}

module.exports = showStats;
