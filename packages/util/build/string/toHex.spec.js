"use strict";

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('hexToString', () => {
  it('converts an empty to ""', () => {
    expect((0, _.stringToHex)()).toEqual('0x');
  });
  it('converts to a hex from string', () => {
    expect((0, _.stringToHex)('hello')).toEqual('0x68656c6c6f');
  });
});