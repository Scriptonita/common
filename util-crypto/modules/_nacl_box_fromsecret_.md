[Polkadot JS Common](../README.md) › [Globals](../globals.md) › ["nacl/box/fromSecret"](_nacl_box_fromsecret_.md)

# External module: "nacl/box/fromSecret"

## Index

### Functions

* [naclBoxKeypairFromSecret](_nacl_box_fromsecret_.md#naclboxkeypairfromsecret)

## Functions

###  naclBoxKeypairFromSecret

▸ **naclBoxKeypairFromSecret**(`secret`: Uint8Array): *[Keypair](../interfaces/_types_.keypair.md)*

*Defined in [nacl/box/fromSecret.ts:23](https://github.com/polkadot-js/common/blob/f86fcc60/packages/util-crypto/src/nacl/box/fromSecret.ts#L23)*

**`name`** naclBoxKeypairFromSecret

**`summary`** Creates a new public/secret box keypair from a secret.

**`description`** 
Returns a object containing a box `publicKey` & `secretKey` generated from the supplied secret.

**`example`** 
<BR>

```javascript
import { naclBoxKeypairFromSecret } from '@polkadot/util-crypto';

naclBoxKeypairFromSecret(...); // => { secretKey: [...], publicKey: [...] }
```

**Parameters:**

Name | Type |
------ | ------ |
`secret` | Uint8Array |

**Returns:** *[Keypair](../interfaces/_types_.keypair.md)*
