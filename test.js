/* global t */
import test from 'ava';

var atmIn = ["credit", 3000, "From ATM"];

test('files are created', t => {
  var fileExists = require('file-exists');
  var xdgBasedir = require('xdg-basedir');
  var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';
  require('./setup-files.js');
  return fileExists(expensesFilepath);
});

test('wrong date is not allowed', t => {
  var module = require('./');

  module(atmIn, {});

  var input = ["debit", 50, "Coffee and mufin - one more time"];
  var opts = {d: "2015-5-5"};

  t.throws(function() {
    module(input, opts);
  });
});

test('wrong debit/credit is not allowed', t => {
  var module = require('./');

  module(atmIn, {});

  var input = ["debit", 50];

  t.throws(function() {
    module(input, {});
  });
});

test('wrong stash transactions are not allowed', t => {
  var module = require('./');

  module(atmIn, {});

  var input = ["stash"];

  t.throws(function() {
    module(input, {});
  });
});
