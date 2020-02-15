[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/seal"](_nacl_seal_.md)

# External module: "nacl/seal"

## Index

### Functions

* [naclSeal](_nacl_seal_.md#naclseal)

## Functions

###  naclSeal

▸ **naclSeal**(`message`: Uint8Array, `senderBoxSecret`: Uint8Array, `receiverBoxPublic`: Uint8Array, `nonce`: Uint8Array): *Sealed*

*Defined in [nacl/seal.ts:28](https://github.com/polkadot-js/common/blob/81a31519/packages/util-crypto/src/nacl/seal.ts#L28)*

**`name`** naclSeal

**`summary`** Seals a message using the sender's encrypting secretKey, receiver's public key, and nonce

**`description`** 
Returns an encrypted message which can be open only by receiver's secretKey. If the `nonce` was not supplied, a random value is generated.

**`example`** 
<BR>

```javascript
import { naclEncrypt } from '@polkadot/util-crypto';

naclSeal([...], [...], [...], [...]); // => [...]
```

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`message` | Uint8Array | - |
`senderBoxSecret` | Uint8Array | - |
`receiverBoxPublic` | Uint8Array | - |
`nonce` | Uint8Array | randomAsU8a(24) |

**Returns:** *Sealed*
