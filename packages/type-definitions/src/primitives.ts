export default {
  rpc: {},
  types: {
    Amount: 'i128',
    AmountOf: 'Amount',
    AuctionId: 'u32',
    AuctionIdOf: 'AuctionId',
    Share: 'u128',
    TokenSymbol: {
      _enum: {
        DNAR: 0,
        USDJ: 1,
        DOT: 2,
        LDOT: 3,
        RENBTC: 4,

        KAR: 128,
        KUSD: 129,
        KSM: 130,
        LKSM: 131
        // Reserve for XBTC = 132
      }
    },
    DexShare: {
      _enum: {
        Token: 'TokenSymbol',
        Erc20: 'EvmAddress'
      }
    },
    CurrencyId: {
      _enum: {
        Token: 'TokenSymbol',
        DEXShare: '(DexShare, DexShare)',
        ERC20: 'EvmAddress',
        ChainSafe: '[u8; 32]'
      }
    },
    CurrencyIdOf: 'CurrencyId',
    AirDropCurrencyId: {
      _enum: ['KAR', 'DNAR']
    },
    AuthoritysOriginId: {
      _enum: ['Root', 'SetheumTreasury', 'SIF']
    },
    DataProviderId: {
      _enum: ['Aggregated', 'Setheum', 'Band']
    },
    TradingPair: '(CurrencyId,  CurrencyId)',
    NFTBalance: 'u128'
  }
};