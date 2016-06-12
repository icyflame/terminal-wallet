var xdgBasedir = require('xdg-basedir');
exports.WALLET_FILE_PATH = xdgBasedir.data + '/wallet/expenses.csv';

// MSGs shown to the user

exports.MSG_ERR_CREDIT_DEBIT_TRANS = "Input is not enough or could not be parsed\nCommand should look like: wallet debit 50 'Coffee with Dany'";
exports.MSG_ERR_STASH_TRANS = 'Input is not enough or could not be parsed\nCommand should look like: wallet stash 500';
exports.MSG_INVALID_OPTION = 'Invalid option. Run wallet --help to learn about available options';
exports.MSG_INVALID_DATE = 'Date should be formatted as yyyy-mm-dd. Support for other formats coming soon.';
