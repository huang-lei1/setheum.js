import { Token, FixedPointNumber, TokenBalance } from '@setheum-js/sdk-core';

export interface LiquidityPool {
  token1: Token;
  token2: Token;
  balance1: FixedPointNumber;
  balance2: FixedPointNumber;
}

export interface MiddleResult {
  inputToken: Token;
  outputToken: Token;
  inputAmount: FixedPointNumber;
  outputAmount: FixedPointNumber;
  midPrice: FixedPointNumber;
  priceImpact: FixedPointNumber;
  path: Token[];
}

export interface SwapResult {
  midPrice: FixedPointNumber;
  priceImpact: FixedPointNumber;
  path: Token[];
  input: TokenBalance;
  output: TokenBalance;
  exchangeFee: FixedPointNumber;
}

export type SwapTradeMode = 'EXACT_INPUT' | 'EXACT_OUTPUT';

export interface Fee {
  numerator: FixedPointNumber;
  denominator: FixedPointNumber;
}
