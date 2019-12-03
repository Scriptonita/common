"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToString;

var _toString = _interopRequireDefault(require("../u8a/toString"));

var _toU8a = _interopRequireDefault(require("./toU8a"));

// Copyright 2017-2019 @polkadot/util authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

/**
 * @name hexToU8a
 * @summary Creates a Uint8Array object from a hex string.
 * @description
 * Hex input values return the actual bytes value converted to a string. Anything that is not a hex string (including the `0x` prefix) throws an error.
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexToString } from '@polkadot/util';
 *
 * hexToU8a('0x68656c6c6f'); // hello
 * ```
 */
function hexToString(_value) {
  return (0, _toString.default)((0, _toU8a.default)(_value));
}