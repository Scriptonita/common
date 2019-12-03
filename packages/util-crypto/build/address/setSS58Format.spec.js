"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _encode = _interopRequireDefault(require("./encode"));

var _setSS58Format = _interopRequireDefault(require("./setSS58Format"));

// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
describe('setSS58Format', () => {
  beforeEach(() => {
    (0, _setSS58Format.default)(68);
  });
  it('sets and allows encoding using', () => {
    expect((0, _encode.default)(new Uint8Array([1]))).toEqual('PqtB');
  });
});