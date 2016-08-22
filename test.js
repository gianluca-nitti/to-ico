var fs = require('fs');
var toIco = require('./index.js');
var buf = toIco(fs.readdirSync('fixtures').map(x => fs.readFileSync('fixtures/' + x)));
fs.writeFileSync('icon.ico', buf);
