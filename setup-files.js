'use strict';

function createFileIfDoesNotExist (filepath) {
  var touch = require('touch');
  var xdg = require('xdg-basedir');
  var mkdirp = require('mkdirp');

  filepath = filepath || (xdg.data + '/wallet/expenses.csv');

  mkdirp.sync(xdg.data + '/wallet/exported');
  mkdirp.sync(xdg.data + '/wallet/closed');
  touch.sync(xdg.data + '/wallet/expenses.csv');
}

module.exports = createFileIfDoesNotExist;

createFileIfDoesNotExist();
