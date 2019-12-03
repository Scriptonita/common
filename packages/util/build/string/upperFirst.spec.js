"use strict";

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('stringUpperFirst', () => {
  it("uppers the first letter if it's a capital letter", () => {
    expect((0, _.stringUpperFirst)('ABC')).toBe('ABC');
  });
  it("uppers the first letter if it's a lowercase letter", () => {
    expect((0, _.stringUpperFirst)('abc')).toBe('Abc');
  });
  it('returns undefined as empty', () => {
    expect((0, _.stringUpperFirst)()).toBe('');
  });
  it('returns null as empty', () => {
    expect((0, _.stringUpperFirst)(null)).toBe('');
  });
});