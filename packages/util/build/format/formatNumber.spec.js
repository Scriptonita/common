"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _bn = _interopRequireDefault(require("bn.js"));

var _formatNumber = _interopRequireDefault(require("./formatNumber"));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('formatNumber', () => {
  it('formats empty', () => {
    expect((0, _formatNumber.default)()).toEqual('0');
  });
  it('formats negative numbers', () => {
    expect((0, _formatNumber.default)(-123456)).toEqual('-123,456');
  });
  it('formats BN numbers', () => {
    expect((0, _formatNumber.default)(new _bn.default(12345))).toEqual('12,345');
  });
  it('formats Compact<BN>', () => {
    expect((0, _formatNumber.default)({
      toBn: () => new _bn.default(12345),
      unwrap: () => new _bn.default(0)
    })).toEqual('12,345');
  });
});