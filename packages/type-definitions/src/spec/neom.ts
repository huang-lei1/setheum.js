import type { OverrideVersionedType } from '@polkadot/types/types';

const typesBundleTypes: OverrideVersionedType[] = [
  {
    minmax: [600, 699],
    types: {
      Address: 'LookupSource',
      LookupSource: 'IndicesLookupSource',
      TokenSymbol: {
        _enum: [
        'DNAR',
        'USDJ',
        'DOT',
        'XBTC',
        'LDOT',
        'RENBTC'
      ]
      }
    }
  },
  {
    minmax: [700, 719],
    types: {
      Address: 'GenericMultiAddress',
      LookupSource: 'GenericMultiAddress',
      TokenSymbol: {
        _enum: [
        'DNAR',
        'USDJ',
        'DOT',
        'XBTC',
        'LDOT',
        'RENBTC'
      ]
      }
    }
  },
  {
    minmax: [720, undefined],
    types: {
      Address: 'GenericMultiAddress',
      LookupSource: 'GenericMultiAddress'
    }
  },
  {
    minmax: [600, 722],
    types: {
      PoolId: {
        _enum: {
          Loans: 'CurrencyId',
          DexIncentive: 'CurrencyId',
          DexSaving: 'CurrencyId',
        }
      }
    }
  },
  {
    minmax: [719, 729],
    types: {
      TokenSymbol: {
        _enum: {
          DNAR: 0,
          USDJ: 1,
          DOT: 2,
          LDOT: 3,
          XBTC: 4,
          RENBTC: 5,
          POLKABTC: 6,
          PLM: 7,
          PHA: 8,
          HDT: 9,
          BCG: 11,
          NEOM: 128,
          KUSD: 129,
          KSM: 130,
          LKSM: 131,
          SDN: 135,
          KILT: 138
        }
      },
      CurrencyId: {
        _enum: {
          Token: 'TokenSymbol',
          DEXShare: '(TokenSymbol, TokenSymbol)',
          ERC20: 'EvmAddress'
        }
      }
    }
  }
];

export default typesBundleTypes;
