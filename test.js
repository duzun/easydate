'use strict';

var easydate = require('./easydate');
var assert = require('assert');

assert.equal(easydate('d/M/y', '2016-10-01T00:00:00.000Z'), '01/10/16');
assert.equal(easydate('d/M/Y', '2015-11-03T00:00:00.000Z'), '03/11/2015');
assert.equal(easydate('d-M-Y @ h:m', '2015-11-03T16:06:00.000Z'), '03-11-2015 @ 16:06');
assert.equal(easydate('h:m:s', '2015-11-03T16:06:08.000Z'), '16:06:08');
assert.equal(easydate('h:m:s.l', '2015-11-03T16:06:08.123Z'), '16:06:08.123');

assert.equal(easydate('d-M-y', '03/01/2017'), '01-03-17');
assert.equal(easydate('M~d~Y', '03/01/2017'), '03~01~2017');
assert.equal(easydate('M/d/Y', '03/01/2017'), '03/01/2017');
assert.equal(easydate('M/d/Y', '01/01/2017'), '01/01/2017');
assert.equal(easydate('M/d/Y', '12/31/3045'), '12/31/3045');

assert.equal(easydate('d-M-y', '03-01-2017'), '01-03-17');
assert.equal(easydate('M~d~Y', '03-01-2017'), '03~01~2017');
assert.equal(easydate('M/d/Y', '03-01-2017'), '03/01/2017');
assert.equal(easydate('M/d/Y', '01-01-2017'), '01/01/2017');
assert.equal(easydate('M/d/Y', '12-31-3045'), '12/31/3045');
