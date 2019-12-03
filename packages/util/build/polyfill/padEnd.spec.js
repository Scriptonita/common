"use strict";

/* eslint-disable @typescript-eslint/unbound-method */
// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('String padEnd', () => {
  let stringEnd;
  beforeEach(() => {
    stringEnd = String.prototype.padEnd; // eslint-disable-next-line no-extend-native,@typescript-eslint/no-explicit-any

    String.prototype.padEnd = null;

    require('./padEnd');
  });
  afterEach(() => {
    // eslint-disable-next-line no-extend-native
    String.prototype.padEnd = stringEnd;
  });
  it('does padding', () => {
    expect('test'.padEnd(8, 'A')).toEqual('testAAAA');
    expect('test'.padEnd(8)).toEqual('test    ');
  });
});