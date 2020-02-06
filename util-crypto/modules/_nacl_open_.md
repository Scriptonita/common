[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/open"](_nacl_open_.md)

# External module: "nacl/open"

## Index

### Functions

* [naclOpen](_nacl_open_.md#naclopen)

## Functions

###  naclOpen

▸ **naclOpen**(`sealed`: Uint8Array, `nonce`: Uint8Array, `senderBoxPublic`: Uint8Array, `receiverBoxSecret`: Uint8Array): *Uint8Array | null*

*Defined in [nacl/open.ts:21](https://github.com/polkadot-js/common/blob/fc9a5ac2/packages/util-crypto/src/nacl/open.ts#L21)*

**`name`** naclOpen

**`summary`** Opens a message using the receiver's secretKey and nonce

**`description`** 
Returns a message sealed by the sender, using the receiver's `secret` and `nonce`.

**`example`** 
<BR>

```javascript
import { naclOpen } from '@polkadot/util-crypto';

naclOpen([...], [...], [...]); // => [...]
```

**Parameters:**

Name | Type |
------ | ------ |
`sealed` | Uint8Array |
`nonce` | Uint8Array |
`senderBoxPublic` | Uint8Array |
`receiverBoxSecret` | Uint8Array |

**Returns:** *Uint8Array | null*
