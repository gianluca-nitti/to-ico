# to-ico-sync [![Build Status](https://travis-ci.org/gianluca-nitti/to-ico-sync.svg?branch=master)](https://travis-ci.org/gianluca-nitti/to-ico-sync)

This is a fork of https://github.com/kevva/to-ico that uses a simple synchronous function instead of promises, useful for node-based cli scripts.

## Install

```
$ npm install --save to-ico-sync
```

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

An array of PNG image buffers. The images must have a size of `16x16`, `24x24`, `32x32`, `48x48`, `64x64`, `128x128` or `256x256` and they must have an 8 bit per sample (channel) bit-depth (on Unix you can check this with the `file` command: RGB(A) is supported, while [colormap](https://en.wikipedia.org/wiki/Indexed_color) is not, because it's 8 bits per pixel instead of 8 bits per channel, which is 24 or 32 bits per pixel depending on the presence of the alpha channel). Also, interlaced PNGs aren't supported.
These are limitations in the underlying [pngjs](https://github.com/niegowski/node-pngjs#documentation) library. If you have a colormap PNG you can convert it to an RGB/RGBA PNG with commonly used image editing tools.


## License
MIT licensed. Copyright for portions of source code are held by Kevin Martensson as part of module [to-ico](https://www.npmjs.com/package/to-ico).
