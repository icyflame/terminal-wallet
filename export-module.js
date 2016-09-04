'use strict';
function exportToFile (exportFilepath, printToConsole) {
  var fs = require('fs');
  var xdgBasedir = require('xdg-basedir');
  var logSymbols = require('log-symbols');

  var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';
  var contents = fs.readFileSync(expensesFilepath);

  var prettyDate = require('date-format').asString('yyyy-MM-dd', new Date());

  var defaultExportFilepath = xdgBasedir.data +
    '/wallet/exported/export-' +
    prettyDate + '.csv';

  exportFilepath = exportFilepath || defaultExportFilepath;

  fs.writeFileSync(exportFilepath, 'Date,Remarks,Category,Credit,Debit\n');
  fs.appendFileSync(exportFilepath, contents);

  (printToConsole === undefined)
    ? console.log('\n' + logSymbols.success + ' Your file can be found at :-\n' +
      exportFilepath + '\n')
    : undefined;
}

function getHeaders () {
  return 'Date,Remarks,Category,Credit,Debit\n';
}

exports.getHeaders = getHeaders;
exports.exportToFile = exportToFile;
