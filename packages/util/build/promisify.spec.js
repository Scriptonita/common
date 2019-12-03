"use strict";

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('promisify', () => {
  it('handles functions with no parameters (resolve)', () => {
    const fn = cb => cb(null, [true, 'test', 1]);

    return (0, _.promisify)(null, fn).then(result => {
      expect(result).toEqual([true, 'test', 1]);
    });
  });
  it('handles functions with no parameters (reject)', () => {
    const fn = cb => cb(new Error('test reject'));

    return (0, _.promisify)(null, fn).then(() => {
      throw new Error('Received unexpected result');
    }).catch(error => {
      expect(error.message).toEqual('test reject');
    });
  });
  it('handles functions with parameters (resolve)', () => {
    const fn = (a, b, cb) => cb(null, [a, b]);

    return (0, _.promisify)(null, fn, 2, false).then(result => {
      expect(result).toEqual([2, false]);
    });
  });
  it('handles functions with parameters (reject)', () => {
    const fn = (a, b, c, cb) => cb(new Error("test reject: ".concat(a, ",").concat(b, ",").concat(c)));

    return (0, _.promisify)(null, fn, 3, 'string', true).catch(error => {
      expect(error.message).toEqual('test reject: 3,string,true');
    });
  });
});