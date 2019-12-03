"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isToBn;

var _function = _interopRequireDefault(require("./function"));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isToBn(value) {
  return !!value && (0, _function.default)(value.toBn);
}