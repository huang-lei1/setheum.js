// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { Compact, Option, Vec, bool, u32 } from '@polkadot/types';
import type { AnyNumber } from '@polkadot/types/types';
import type { ChangeBalance, ChangeOptionRate, ChangeOptionRatio } from '@setheum-js/types/interfaces/settMintEngine';
import type { AirDropCurrencyId, Amount, AmountOf, AuctionId, CurrencyId, CurrencyIdOf } from '@setheum-js/types/interfaces/primitives';
import type { Balance, BalanceOf, BlockNumber, Call, LookupSource } from '@setheum-js/types/interfaces/runtime';
import type { Rate } from '@setheum-js/types/interfaces/support';
import type { Extrinsic } from '@polkadot/types/interfaces/extrinsics';
import type { EraIndex } from '@polkadot/types/interfaces/staking';
import type { ApiTypes, SubmittableExtrinsic } from '@polkadot/api/types';

declare module '@polkadot/api/types/submittable' {
  export interface AugmentedSubmittables<ApiType> {
    airDrop: {
      airdrop: AugmentedSubmittable<(to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: AirDropCurrencyId | 'NEOM' | 'DNAR' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, AirDropCurrencyId, Balance]>;
      updateAirdrop: AugmentedSubmittable<(to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: AirDropCurrencyId | 'NEOM' | 'DNAR' | number | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, AirDropCurrencyId, Balance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    auction: {
      /**
       * Bid an auction.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      bid: AugmentedSubmittable<(id: AuctionId | AnyNumber | Uint8Array, value: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AuctionId, Compact<Balance>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    auctionManager: {
      /**
       * Cancel active auction after system shutdown
       * 
       * The dispatch origin of this call must be _None_.
       **/
      cancel: AugmentedSubmittable<(id: AuctionId | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [AuctionId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cdpEngine: {
      /**
       * Liquidate unsafe CDP
       * 
       * The dispatch origin of this call must be _None_.
       * 
       * - `currency_id`: CDP's collateral type.
       * - `who`: CDP's owner.
       **/
      liquidate: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, LookupSource]>;
      /**
       * Update parameters related to risk management of CDP under specific
       * collateral type
       * 
       * The dispatch origin of this call must be `UpdateOrigin`.
       * 
       * - `currency_id`: collateral type.
       * - `interest_rate_per_sec`: extra interest rate per sec, `None` means do not update,
       * `Some(None)` means update it to `None`.
       * - `liquidation_ratio`: liquidation ratio, `None` means do not update, `Some(None)` means
       * update it to `None`.
       * - `liquidation_penalty`: liquidation penalty, `None` means do not update, `Some(None)`
       * means update it to `None`.
       * - `required_collateral_ratio`: required collateral ratio, `None` means do not update,
       * `Some(None)` means update it to `None`.
       * - `maximum_total_debit_value`: maximum total debit value.
       **/
      setCollateralParams: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, interestRatePerSec: ChangeOptionRate | { NoChange: any } | { NewValue: any } | string | Uint8Array, liquidationRatio: ChangeOptionRatio | { NoChange: any } | { NewValue: any } | string | Uint8Array, liquidationPenalty: ChangeOptionRate | { NoChange: any } | { NewValue: any } | string | Uint8Array, requiredCollateralRatio: ChangeOptionRatio | { NoChange: any } | { NewValue: any } | string | Uint8Array, maximumTotalDebitValue: ChangeBalance | { NoChange: any } | { NewValue: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, ChangeOptionRate, ChangeOptionRatio, ChangeOptionRate, ChangeOptionRatio, ChangeBalance]>;
      /**
       * Update global parameters related to risk management of CDP
       * 
       * The dispatch origin of this call must be `UpdateOrigin`.
       * 
       * - `global_interest_rate_per_sec`: global interest rate per sec.
       **/
      setGlobalParams: AugmentedSubmittable<(globalInterestRatePerSec: Rate | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Rate]>;
      /**
       * Settle CDP has debit after system shutdown
       * 
       * The dispatch origin of this call must be _None_.
       * 
       * - `currency_id`: CDP's collateral type.
       * - `who`: CDP's owner.
       **/
      settle: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, LookupSource]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    cdpTreasury: {
      auctionCollateral: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array, target: Balance | AnyNumber | Uint8Array, splited: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance, Balance, bool]>;
      extractSurplusToTreasury: AugmentedSubmittable<(amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Balance]>;
      /**
       * Update parameters related to collateral auction under specific
       * collateral type
       * 
       * The dispatch origin of this call must be `UpdateOrigin`.
       * 
       * - `currency_id`: collateral type
       * - `amount`: expected size of per lot collateral auction
       **/
      setExpectedCollateralAuctionSize: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, size: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Balance]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    currencies: {
      /**
       * Transfer some balance to another account under `currency_id`.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transfer: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, Compact<BalanceOf>]>;
      /**
       * Transfer some native currency to another account.
       * 
       * The dispatch origin for this call must be `Signed` by the
       * transactor.
       **/
      transferNativeCurrency: AugmentedSubmittable<(dest: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Compact<BalanceOf> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, Compact<BalanceOf>]>;
      /**
       * update amount of account `who` under `currency_id`.
       * 
       * The dispatch origin of this call must be _Root_.
       **/
      updateBalance: AugmentedSubmittable<(who: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, currencyId: CurrencyIdOf | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, amount: AmountOf | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [LookupSource, CurrencyIdOf, AmountOf]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    dex: {
      /**
       * Add liquidity to Enabled trading pair, or add provision to
       * Provisioning trading pair.
       * - Add liquidity success will issue shares in current price which decided by the
       * liquidity scale. Shares are temporarily not
       * allowed to transfer and trade, it represents the proportion of
       * assets in liquidity pool.
       * - Add provision success will record the provision, issue shares to caller in the initial
       * price when trading pair convert to Enabled.
       * 
       * - `currency_id_a`: currency id A.
       * - `currency_id_b`: currency id B.
       * - `max_amount_a`: maximum currency A amount allowed to inject to liquidity pool.
       * - `max_amount_b`: maximum currency A amount allowed to inject to liquidity pool.
       * - `deposit_increment_share`: this flag indicates whether to deposit added lp shares to
       * obtain incentives
       **/
      addLiquidity: AugmentedSubmittable<(currencyIdA: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, currencyIdB: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, maxAmountA: Compact<Balance> | AnyNumber | Uint8Array, maxAmountB: Compact<Balance> | AnyNumber | Uint8Array, depositIncrementShare: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, CurrencyId, Compact<Balance>, Compact<Balance>, bool]>;
      disableTradingPair: AugmentedSubmittable<(currencyIdA: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, currencyIdB: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, CurrencyId]>;
      /**
       * Enable a new trading pair(without the provision process),
       * or re-enable a disabled trading pair.
       **/
      enableTradingPair: AugmentedSubmittable<(currencyIdA: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, currencyIdB: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, CurrencyId]>;
      /**
       * List a new trading pair, trading pair will become Enabled status
       * after provision process.
       **/
      listTradingPair: AugmentedSubmittable<(currencyIdA: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, currencyIdB: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, minContributionA: Balance | AnyNumber | Uint8Array, minContributionB: Balance | AnyNumber | Uint8Array, targetProvisionA: Balance | AnyNumber | Uint8Array, targetProvisionB: Balance | AnyNumber | Uint8Array, notBefore: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, CurrencyId, Balance, Balance, Balance, Balance, BlockNumber]>;
      /**
       * Remove liquidity from specific liquidity pool in the form of burning
       * shares, and withdrawing currencies in trading pairs from liquidity
       * pool in proportion, and withdraw liquidity incentive interest.
       * 
       * - `currency_id_a`: currency id A.
       * - `currency_id_b`: currency id B.
       * - `remove_share`: liquidity amount to remove.
       * - `by_withdraw`: this flag indicates whether to withdraw share which is on incentives.
       **/
      removeLiquidity: AugmentedSubmittable<(currencyIdA: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, currencyIdB: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, removeShare: Compact<Balance> | AnyNumber | Uint8Array, byWithdraw: bool | boolean | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, CurrencyId, Compact<Balance>, bool]>;
      /**
       * Trading with DEX, swap with exact supply amount
       * 
       * - `path`: trading path.
       * - `supply_amount`: exact supply amount.
       * - `min_target_amount`: acceptable minimum target amount.
       **/
      swapWithExactSupply: AugmentedSubmittable<(path: Vec<CurrencyId> | (CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array)[], supplyAmount: Compact<Balance> | AnyNumber | Uint8Array, minTargetAmount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<CurrencyId>, Compact<Balance>, Compact<Balance>]>;
      /**
       * Trading with DEX, swap with exact target amount
       * 
       * - `path`: trading path.
       * - `target_amount`: exact target amount.
       * - `max_supply_amount`: acceptable maximum supply amount.
       **/
      swapWithExactTarget: AugmentedSubmittable<(path: Vec<CurrencyId> | (CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array)[], targetAmount: Compact<Balance> | AnyNumber | Uint8Array, maxSupplyAmount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Vec<CurrencyId>, Compact<Balance>, Compact<Balance>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    emergencyShutdown: {
      /**
       * Start emergency shutdown
       * 
       * The dispatch origin of this call must be `ShutdownOrigin`.
       **/
      emergencyShutdown: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Open final redemption if settlement is completed.
       * 
       * The dispatch origin of this call must be `ShutdownOrigin`.
       **/
      openCollateralRefund: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Refund a basket of remaining collateral assets to caller
       * 
       * - `amount`: stable currency amount used to refund.
       **/
      refundCollaterals: AugmentedSubmittable<(amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Balance>]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    honzon: {
      /**
       * Adjust the loans of `currency_id` by specific
       * `collateral_adjustment` and `debit_adjustment`
       * 
       * - `currency_id`: collateral currency id.
       * - `collateral_adjustment`: signed amount, positive means to deposit collateral currency
       * into CDP, negative means withdraw collateral currency from CDP.
       * - `debit_adjustment`: signed amount, positive means to issue some amount of stablecoin
       * to caller according to the debit adjustment, negative means caller will payback some
       * amount of stablecoin to CDP according to to the debit adjustment.
       **/
      adjustLoan: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, collateralAdjustment: Amount | AnyNumber | Uint8Array, debitAdjustment: Amount | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Amount, Amount]>;
      /**
       * Authorize `to` to manipulate the loan under `currency_id`
       * 
       * - `currency_id`: collateral currency id.
       * - `to`: authorizee account
       **/
      authorize: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, LookupSource]>;
      closeLoanHasDebitByDex: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, maybePath: Option<Vec<CurrencyId>> | null | object | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, Option<Vec<CurrencyId>>]>;
      /**
       * Transfer the whole CDP of `from` under `currency_id` to caller's CDP
       * under the same `currency_id`, caller must have the authorization of
       * `from` for the specific collateral type
       * 
       * - `currency_id`: collateral currency id.
       * - `from`: authorizer account
       **/
      transferLoanFrom: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, from: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, LookupSource]>;
      /**
       * Cancel the authorization for `to` under `currency_id`
       * 
       * - `currency_id`: collateral currency id.
       * - `to`: authorizee account
       **/
      unauthorize: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array, to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId, LookupSource]>;
      /**
       * Cancel all authorization of caller
       **/
      unauthorizeAll: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    nomineesElection: {
      bond: AugmentedSubmittable<(amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Balance>]>;
      chill: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      nominate: AugmentedSubmittable<(targets: Vec<NomineeId> | (NomineeId | string | Uint8Array)[]) => SubmittableExtrinsic<ApiType>, [Vec<NomineeId>]>;
      rebond: AugmentedSubmittable<(amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Balance>]>;
      unbond: AugmentedSubmittable<(amount: Compact<Balance> | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [Compact<Balance>]>;
      withdrawUnbonded: AugmentedSubmittable<() => SubmittableExtrinsic<ApiType>, []>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    polkadotBridge: {
      forceEra: AugmentedSubmittable<(at: BlockNumber | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [BlockNumber]>;
      setMockRewardRate: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, rewardRate: Rate | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Rate]>;
      simualteReceiveFromSubAccount: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, to: LookupSource | { Id: any } | { Index: any } | { Raw: any } | { Address32: any } | { Address20: any } | string | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, LookupSource, Balance]>;
      simulateBondExtra: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Balance]>;
      simulatePayoutStakers: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, era: EraIndex | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, EraIndex]>;
      simulateRebond: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Balance]>;
      simulateSlashSubAccount: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Balance]>;
      simulateTransferToSubAccount: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Balance]>;
      simulateUnbond: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array, amount: Balance | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32, Balance]>;
      simulateWithdrawUnbonded: AugmentedSubmittable<(accountIndex: u32 | AnyNumber | Uint8Array) => SubmittableExtrinsic<ApiType>, [u32]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    prices: {
      /**
       * Lock the price and feed it to system.
       * 
       * The dispatch origin of this call must be `LockOrigin`.
       * 
       * - `currency_id`: currency type.
       **/
      lockPrice: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Unlock the price and get the price from `PriceProvider` again
       * 
       * The dispatch origin of this call must be `LockOrigin`.
       * 
       * - `currency_id`: currency type.
       **/
      unlockPrice: AugmentedSubmittable<(currencyId: CurrencyId | { Token: any } | { DEXShare: any } | { ERC20: any } | { ChainBridge: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [CurrencyId]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
    stakingPool: {
      /**
       * Update params related to staking pool
       * 
       * The dispatch origin of this call must be `UpdateOrigin`.
       **/
      setStakingPoolParams: AugmentedSubmittable<(targetMaxFreeUnbondedRatio: ChangeRatio | { NoChange: any } | { NewValue: any } | string | Uint8Array, targetMinFreeUnbondedRatio: ChangeRatio | { NoChange: any } | { NewValue: any } | string | Uint8Array, targetUnbondingToFreeRatio: ChangeRatio | { NoChange: any } | { NewValue: any } | string | Uint8Array, unbondingToFreeAdjustment: ChangeRate | { NoChange: any } | { NewValue: any } | string | Uint8Array, baseFeeRate: ChangeRate | { NoChange: any } | { NewValue: any } | string | Uint8Array) => SubmittableExtrinsic<ApiType>, [ChangeRatio, ChangeRatio, ChangeRatio, ChangeRate, ChangeRate]>;
      /**
       * Generic tx
       **/
      [key: string]: SubmittableExtrinsicFunction<ApiType>;
    };
  }

  export interface SubmittableExtrinsics<ApiType extends ApiTypes> extends AugmentedSubmittables<ApiType> {
    (extrinsic: Call | Extrinsic | Uint8Array | string): SubmittableExtrinsic<ApiType>;
    [key: string]: SubmittableModuleExtrinsics<ApiType>;
  }
}
