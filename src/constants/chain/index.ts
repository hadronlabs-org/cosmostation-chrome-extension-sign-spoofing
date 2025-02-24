import type {
  AptosChain,
  AptosNetwork,
  CosmosChain,
  CosmosFeeBaseDenom,
  CosmosGasRate,
  EthereumChain,
  EthereumNetwork,
  SuiChain,
  SuiNetwork,
} from '~/types/chain';

import { APTOS } from './aptos/aptos';
import { DEVNET as APTOS_NETWORK__DEVNET } from './aptos/network/devnet';
import { MAINNET as APTOS_NETWORK__MAINNET } from './aptos/network/mainnet';
import { TESTNET as APTOS_NETWORK__TESTNET } from './aptos/network/testnet';
import { AKASH } from './cosmos/akash';
import { ARCHWAY } from './cosmos/archway';
import { ASSET_MANTLE } from './cosmos/assetMantle';
import { AXELAR } from './cosmos/axelar';
import { BAND } from './cosmos/band';
import { BITCANNA } from './cosmos/bitcanna';
import { BITSONG } from './cosmos/bitsong';
import { CANTO } from './cosmos/canto';
import { CERBERUS } from './cosmos/cerberus';
import { CHIHUAHUA } from './cosmos/chihuahua';
import { COMDEX } from './cosmos/comdex';
import { COREUM } from './cosmos/coreum';
import { COSMOS } from './cosmos/cosmos';
import { CRESCENT } from './cosmos/crescent';
import { CRYPTO_ORG } from './cosmos/cryptoOrg';
import { CUDOS } from './cosmos/cudos';
import { DESMOS } from './cosmos/desmos';
import { EMONEY } from './cosmos/emoney';
import { EVMOS } from './cosmos/evmos';
import { FETCH_AI } from './cosmos/fetchAi';
import { GRAVITY_BRIDGE } from './cosmos/gravityBridge';
import { INJECTIVE } from './cosmos/injective';
import { IRIS } from './cosmos/iris';
import { IXO } from './cosmos/ixo';
import { JUNO } from './cosmos/juno';
import { KAVA } from './cosmos/kava';
import { KI } from './cosmos/ki';
import { KYVE } from './cosmos/kyve';
import { LIKE_COIN } from './cosmos/likeCoin';
import { LUM } from './cosmos/lum';
import { MARS } from './cosmos/mars';
import { MEDIBLOC } from './cosmos/medibloc';
import { NEUTRON } from './cosmos/neutron';
import { NOBLE } from './cosmos/noble';
import { NYX, NYX_FEE_BASE_DENOMS, NYX_GAS_RATES } from './cosmos/nyx';
import { OMNIFLIX } from './cosmos/omniflix';
import { ONOMY } from './cosmos/onomy';
import { OSMOSIS } from './cosmos/osmosis';
import { PASSAGE } from './cosmos/passage';
import { PERSISTENCE } from './cosmos/persistence';
import { PROVENANCE } from './cosmos/provenance';
import { QUASAR } from './cosmos/quasar';
import { QUICK_SILVER } from './cosmos/quickSilver';
import { REGEN } from './cosmos/regen';
import { RIZON } from './cosmos/rizon';
import { SECRET } from './cosmos/secret';
import { SEI } from './cosmos/sei';
import { SENTINEL } from './cosmos/sentinel';
import { SHENTU } from './cosmos/shentu';
import { SOMMELIER } from './cosmos/sommelier';
import { STAFIHUB } from './cosmos/stafihub';
import { STARGAZE } from './cosmos/stargaze';
import { STARNAME } from './cosmos/starname';
import { STRIDE } from './cosmos/stride';
import { TERITORI } from './cosmos/teritori';
import { TERRA } from './cosmos/terra';
import { TGRADE } from './cosmos/tgrade';
import { UMEE } from './cosmos/umee';
import { XPLA } from './cosmos/xpla';
import { ETHEREUM } from './ethereum/ethereum';
import { ARBITRUM as ETHEREUM_NETWORK__ARBITRUM } from './ethereum/network/arbitrum';
import { AVALANCHE as ETHEREUM_NETWORK__AVALANCHE } from './ethereum/network/avalanche';
import { CANTO as ETHEREUM_NETWORK__CANTO } from './ethereum/network/canto';
import { CRONOS as ETHEREUM_NETWORK__CRONOS } from './ethereum/network/cronos';
import { ETHEREUM as ETHEREUM_NETWORK__ETHEREUM } from './ethereum/network/ethereum';
import { EVMOS as ETHEREUM_NETWORK__EVMOS } from './ethereum/network/evmos';
import { FANTOM as ETHEREUM_NETWORK__FANTOM } from './ethereum/network/fantom';
import { HARMONY as ETHEREUM_NETWORK__HARMONY } from './ethereum/network/harmony';
import { KAVA as ETHEREUM_NETWORK__KAVA } from './ethereum/network/kava';
import { OKC as ETHEREUM_NETWORK__OKC } from './ethereum/network/okc';
import { OPTIMISM as ETHEREUM_NETWORK__OPTIMISM } from './ethereum/network/optimism';
import { POLYGON as ETHEREUM_NETWORK__POLYGON } from './ethereum/network/polygon';
import { SCROLL_SEPOLIA_TESTNET as ETHEREUM_NETWORK__SCROLL_SEPOLIA_TESTNET } from './ethereum/network/scrollSepoliaTestnet';
import { SMART_CHAIN as ETHEREUM_NETWORK__SMART_CHAIN } from './ethereum/network/smartChain';
import { DEVNET as SUI_NETWORK__DEVNET } from './sui/network/devnet';
import { MAINNET as SUI_NETWORK__MAINNET } from './sui/network/mainnet';
import { TESTNET as SUI_NETWORK__TESTNET } from './sui/network/testnet';
import { SUI } from './sui/sui';

export const LINE_TYPE = {
  COSMOS: 'COSMOS',
  ETHEREUM: 'ETHEREUM',
  APTOS: 'APTOS',
  SUI: 'SUI',
  COMMON: 'COMMON',
} as const;

export const COSMOS_DEFAULT_GAS = '100000';
export const COSMOS_DEFAULT_SEND_GAS = '100000';
export const COSMOS_DEFAULT_SWAP_GAS = '250000';
export const COSMOS_DEFAULT_IBC_SEND_GAS = '150000';
export const COSMOS_DEFAULT_TRANSFER_GAS = '200000';
export const COSMOS_DEFAULT_IBC_TRANSFER_GAS = '250000';
export const COSMOS_DEFAULT_REWARD_GAS = '300000';

export const COSMOS_DEFAULT_ESTIMATE_AV = '1.2';
export const COSMOS_DEFAULT_ESTIMATE_EXCEPTED_AV = '1.4';

export const COSMOS_CHAINS: CosmosChain[] = [
  COSMOS,
  AKASH,
  ARCHWAY,
  ASSET_MANTLE,
  AXELAR,
  BAND,
  BITCANNA,
  BITSONG,
  CANTO,
  CERBERUS,
  CHIHUAHUA,
  COMDEX,
  COREUM,
  CRESCENT,
  CRYPTO_ORG,
  CUDOS,
  DESMOS,
  EMONEY,
  EVMOS,
  FETCH_AI,
  GRAVITY_BRIDGE,
  INJECTIVE,
  IRIS,
  IXO,
  JUNO,
  KAVA,
  KI,
  KYVE,
  LIKE_COIN,
  LUM,
  MARS,
  MEDIBLOC,
  NEUTRON,
  NOBLE,
  NYX,
  OMNIFLIX,
  ONOMY,
  OSMOSIS,
  PASSAGE,
  PERSISTENCE,
  PROVENANCE,
  QUASAR,
  QUICK_SILVER,
  REGEN,
  RIZON,
  SECRET,
  SEI,
  SENTINEL,
  SHENTU,
  SOMMELIER,
  STAFIHUB,
  STARGAZE,
  STARNAME,
  STRIDE,
  TERITORI,
  TERRA,
  TGRADE,
  UMEE,
  XPLA,
];

export const COSMOS_FEE_BASE_DENOMS: CosmosFeeBaseDenom[] = [...NYX_FEE_BASE_DENOMS];

export const COSMOS_GAS_RATES: CosmosGasRate[] = [...NYX_GAS_RATES];

export const ETHEREUM_CHAINS: EthereumChain[] = [ETHEREUM];

export const ETHEREUM_NETWORKS: EthereumNetwork[] = [
  ETHEREUM_NETWORK__ETHEREUM,
  ETHEREUM_NETWORK__ARBITRUM,
  ETHEREUM_NETWORK__AVALANCHE,
  ETHEREUM_NETWORK__CANTO,
  ETHEREUM_NETWORK__CRONOS,
  ETHEREUM_NETWORK__EVMOS,
  ETHEREUM_NETWORK__FANTOM,
  ETHEREUM_NETWORK__HARMONY,
  ETHEREUM_NETWORK__KAVA,
  ETHEREUM_NETWORK__OKC,
  ETHEREUM_NETWORK__OPTIMISM,
  ETHEREUM_NETWORK__POLYGON,
  ETHEREUM_NETWORK__SMART_CHAIN,
  ETHEREUM_NETWORK__SCROLL_SEPOLIA_TESTNET,
];

export const APTOS_CHAINS: AptosChain[] = [APTOS];

export const APTOS_NETWORKS: AptosNetwork[] = [APTOS_NETWORK__MAINNET, APTOS_NETWORK__TESTNET, APTOS_NETWORK__DEVNET];

export const SUI_CHAINS: SuiChain[] = [SUI];

export const SUI_NETWORKS: SuiNetwork[] = [SUI_NETWORK__MAINNET, SUI_NETWORK__TESTNET, SUI_NETWORK__DEVNET];

export const CHAINS = [...ETHEREUM_CHAINS, ...COSMOS_CHAINS, ...APTOS_CHAINS, ...SUI_CHAINS];
