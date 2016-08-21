# to-ico-sync [![Build Status](https://travis-ci.org/gianluca-nitti/to-ico.svg?branch=master)](https://travis-ci.org/gianluca-nitti/to-ico)

This is a fork of https://github.com/kevva/to-ico that uses a simple synchronous function instead of promises, useful for node-based cli scripts.

## Install

Will be:
```
$ npm install --save to-ico-sync
```
(this doesn't work right now, the module isn't on npm yet)

## Usage

```js
const fs = require('fs');
const toIco = require('to-ico-sync');

const files = [
	fs.readFileSync('unicorn-16x16.png'),
	fs.readFileSync('unicorn-32x32.png')
];

var buf = toIco(files);

fs.writeFileSync('favicon.ico', buf);

```


## API

### toIco(input)

#### input

Type: `array`

An array of PNG image buffers. The images must have a size of `16x16`, `24x24`, `32x32`, `48x48`, `64x64`, `128x128` or `256x256`.


## License
MIT licensed. Copyright for portions of source code are held by Kevin Martensson as part of module [to-ico](https://www.npmjs.com/package/to-ico).
