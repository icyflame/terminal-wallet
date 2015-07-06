#!/usr/bin/env node
'use strict';
var meow = require('meow');
var terminalWallet = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ terminal-wallet [input]',
    '',
    'Examples',
    '  $ terminal-wallet',
    '  unicorns & rainbows',
    '',
    '  $ terminal-wallet ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

terminalWallet(cli.input, cli.flags);
