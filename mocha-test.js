/* global it */
'use strict';
var assert = require('assert');
// var terminalWallet = require('./');
var fileExists = require('file-exists');
var xdgBasedir = require('xdg-basedir');

var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';

it('should create files', function () {
  require('./setup-files.js');
  assert.strictEqual(fileExists(expensesFilepath), true);
});
