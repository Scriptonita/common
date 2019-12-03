/**
 * @name hexHasPrefix
 * @summary Tests for the existence of a `0x` prefix.
 * @description
 * Checks for a valid hex input value and if the start matched `0x`
 * @example
 * <BR>
 *
 * ```javascript
 * import { hexHasPrefix } from '@polkadot/util';
 *
 * console.log('has prefix', hexHasPrefix('0x1234')); // => true
 * ```
 */
export default function hexHasPrefix(value?: string | null): boolean;