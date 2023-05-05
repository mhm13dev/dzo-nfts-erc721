import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";

const BSC_RPC_URL_TESTNET =
  process.env.BSC_RPC_URL_TESTNET || "http://localhost:8545";

const BSC_RPC_URL_MAINNET =
  process.env.BSC_RPC_URL_MAINNET || "http://localhost:8545";

const PRIVATE_KEY_TESTNET = process.env.PRIVATE_KEY_TESTNET || "0xkey";

const PRIVATE_KEY_MAINNET = process.env.PRIVATE_KEY_MAINNET || "0xkey";

const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY || "key";

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://localhost:8545",
      // accounts: provided by hardhat
      chainId: 31337,
    },
    bsc_testnet: {
      url: BSC_RPC_URL_TESTNET,
      accounts: [PRIVATE_KEY_TESTNET],
      chainId: 97,
    },
    bsc_mainnet: {
      url: BSC_RPC_URL_MAINNET,
      accounts: [PRIVATE_KEY_MAINNET],
      chainId: 56,
    },
  },
  etherscan: {
    apiKey: {
      bsc: BSCSCAN_API_KEY,
      bscTestnet: BSCSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: false,
    currency: "USD",
    outputFile: "gas-report.txt",
    noColors: true,
    coinmarketcap: COINMARKETCAP_API_KEY,
    token: "BNB",
  },
};

export default config;
