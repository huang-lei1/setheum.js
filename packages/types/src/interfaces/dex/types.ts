// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Enum, Struct } from '@polkadot/types';
import type { ITuple } from '@polkadot/types/types';
import type { Balance, BlockNumber } from '@setheum-js/types/interfaces/runtime';

/** @name BalanceRequest */
export interface BalanceRequest extends Struct {
  readonly amount: Balance;
}

/** @name BalanceWrapper */
export interface BalanceWrapper extends Struct {
  readonly amount: Balance;
}

/** @name TradingPairProvisionParameters */
export interface TradingPairProvisionParameters extends Struct {
  readonly minContribution: ITuple<[Balance, Balance]>;
  readonly targetProvision: ITuple<[Balance, Balance]>;
  readonly accumulatedProvision: ITuple<[Balance, Balance]>;
  readonly notBefore: BlockNumber;
}

/** @name TradingPairStatus */
export interface TradingPairStatus extends Enum {
  readonly isNotEnabled: boolean;
  readonly isProvisioning: boolean;
  readonly asProvisioning: TradingPairProvisionParameters;
  readonly isEnabled: boolean;
}

export type PHANTOM_DEX = 'dex';
