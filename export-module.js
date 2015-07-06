'use strict';
function createExportFile () {
  var fs = require('fs');
  var xdgBasedir = require('xdg-basedir');
  var logSymbols = require('log-symbols');
  var contents = fs.readFileSync(xdgBasedir.data + '/wallet/expenses.csv');
  var exportFilename = xdgBasedir.data + '/wallet/export.csv';
  require('./setup-files.js')(exportFilename);
  fs.writeFileSync(exportFilename, 'Date,Remarks,Category,Credit,Debit\n');
  fs.appendFileSync(exportFilename, contents);
  console.log('\n' + logSymbols.success + ' Your file can be found at ' + exportFilename + '\n');
}

module.exports = createExportFile;
