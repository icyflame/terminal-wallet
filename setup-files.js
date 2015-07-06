'use strict';

function createFileIfDoesNotExist (filepath) {
  var fileExists = require('file-exists');
  var touch = require('touch');
  var xdg = require('xdg-basedir');

  filepath = filepath ? filepath : xdg.data + '/wallet/expenses.csv';

  if (!fileExists(filepath)) {
    var mkdirp = require('mkdirp');
    mkdirp(xdg.data + '/wallet');
    touch(filepath);
  }
}

module.exports = createFileIfDoesNotExist;

createFileIfDoesNotExist();
