/* global t */
import test from 'ava';

test('files are created', t => {
	var fileExists = require('file-exists');
	var xdgBasedir = require('xdg-basedir');
	var expensesFilepath = xdgBasedir.data + '/wallet/expenses.csv';
	require('./setup-files.js');
	return fileExists(expensesFilepath);
});

test('bar', async t => {
	const bar = Promise.resolve('bar');

	t.is(await bar, 'bar');
});
