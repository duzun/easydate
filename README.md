# easydate [![Build Status](https://travis-ci.org/roryrjb/easydate.svg?branch=master)](https://travis-ci.org/roryrjb/easydate) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

> Returns the date according to a pattern.

### Installation

```
$ npm install easydate
```

__Test:__

```
$ npm test
```

### Usage/API

__easydate(patternString, [inputDate])__

The single exported function has two arguments. The first and only required argument is the pattern string (see _Pattern Options_ below). If only including the pattern string it will return a formatted string for the current date-time, if the optional input date string is supplied, that particular date will be returned formatted. This input date string must be parseable by JavaScript's `Date.parse` function; see below for acceptable examples.

__Examples:__

```javascript
var easydate = require('easydate');

// current date/time
easydate('d-M-y'); // "28-01-14"
easydate('d/M/Y'); // "28/01/2014"
easydate('Y.M.d'); // "2014.01.28"
easydate('M'); // "01"
easydate('d-M-Y @ h:m:s.l'); // "29-01-2014 @ 07:22:37.418"

// specified date/time
easydate('d-M-Y @ h:m', '2015-11-03T16:06:00.000Z'); // "03-11-2015 @ 16:06"
easydate('h:m:s.l', '2015-11-03T16:06:08.123Z'); // "16:06:08.123"
easydate('M~d~Y', '03-01-2017'); // "03~01~2017"
```

### Pattern Options

_Case sensitive._

* ```Y``` Full year (nnnn)
* ```y``` Year (nn)
* ```M``` Month (nn)
* ```d``` Day (nn)
* ```h``` Hour (nn)
* ```m``` Minute (nn)
* ```s``` Second (nn)
* ```l``` Millisecond (nnn)

### Caveats

Any instances of the above characters will be replaced with the relevant numbers. It is recommended to not use words within the pattern string.

### License

MIT
