/**
 * Balancer V2 — Fraxtal TVL adapter
 *
 * Canonical Balancer vault deployed on Fraxtal mainnet.
 * onChainTvl enumerates all registered pools via PoolRegistered events.
 *
 * Vault: 0xBA12222222228d8Ba445958a75a0704d566BF2C8 (canonical block 4,708,596)
 */

'use strict'

const { onChainTvl } = require('../helper/balancer')

module.exports = {
  timetravel: false,
  fraxtal: {
    tvl: onChainTvl('0xBA12222222228d8Ba445958a75a0704d566BF2C8', 4708596),
  },
}
