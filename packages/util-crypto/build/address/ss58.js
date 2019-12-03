"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowedSS58 = void 0;
// Copyright 2017-2019 @polkadot/util-crypto authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
const allowedSS58 = [// Polkadot
0, 1, // Kusama
2, 3, // Dothereum
20, // Substrate default
42, 43, // Substrate BBQ (deprecated)
68, 69];
exports.allowedSS58 = allowedSS58;