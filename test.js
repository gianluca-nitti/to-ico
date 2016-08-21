var fs = require('fs');
var toIco = require('./index.js');
var buf = toIco([fs.readFileSync('fixtures/256.png')]);
fs.writeFileSync('icon.ico', buf);
