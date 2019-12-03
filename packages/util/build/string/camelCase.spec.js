"use strict";

var _ = require(".");

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('stringCamelCase', () => {
  it('works correctly', () => {
    expect((0, _.stringCamelCase)('Snake_case')).toBe('snakeCase');
  });
});