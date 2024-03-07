import { rateStrategyStableOne, rateStrategyStableTwo, rateStrategyVolatileOne } from "./rateStrategies";
import { ZERO_ADDRESS } from "../../helpers";
import { IAaveConfiguration, eEthereumNetwork, eArbitrumNetwork } from "../../helpers/types";

import { CommonsConfig } from "./commons";
import { strategyDAI, strategyUSDC, strategyAAVE, strategyLINK, strategyWETH, strategyUSDT } from "./reservesConfigs";

// ----------------
// POOL--SPECIFIC PARAMS
// ----------------

export const AaveMarket: IAaveConfiguration = {
    ...CommonsConfig,
    MarketId: "Testnet Aave Market",
    ProviderId: 8080,
    ReservesConfig: {
        DAI: strategyDAI,
        USDT: strategyUSDT,
        // AAVE: strategyAAVE,
        USDC: strategyUSDC,
        WETH: strategyWETH,
        // LINK: strategyLINK,
    },
    ReserveAssets: {
        [eEthereumNetwork.main]: {
            // AAVE: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
            // DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
            // USDC: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
            // WETH: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            // LINK: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
            // DAI: "0xFe0a2a42174d626FeF4b8C1dD2BA51BbD82cB546",
            // USDT: "0x9FBb8863005a30c9888C5EBe096076e8062Cd221",
        },
        [eEthereumNetwork.kovan]: {
            AAVE: ZERO_ADDRESS,
            DAI: ZERO_ADDRESS,
            USDC: ZERO_ADDRESS,
            WETH: ZERO_ADDRESS,
            LINK: ZERO_ADDRESS,
        },
        [eArbitrumNetwork.arbitrumTestnet]: {
            AAVE: ZERO_ADDRESS,
            DAI: ZERO_ADDRESS,
            USDC: ZERO_ADDRESS,
            WETH: ZERO_ADDRESS,
            LINK: ZERO_ADDRESS,
        },
        [eEthereumNetwork.rinkeby]: {
            AAVE: ZERO_ADDRESS,
            DAI: ZERO_ADDRESS,
            USDC: ZERO_ADDRESS,
            WETH: ZERO_ADDRESS,
            LINK: ZERO_ADDRESS,
        },
        [eEthereumNetwork.sepolia]: {
            DAI: "0xFe0a2a42174d626FeF4b8C1dD2BA51BbD82cB546",
            USDT: "0x9FBb8863005a30c9888C5EBe096076e8062Cd221",
            USDC: "0xA0029c1f90a1A449b437A8C0DBEf2e5f3D80108c",
            WETH: "0x7b79995e5f793a07bc00c21412e50ecae098e7f9",
        },
    },
};

export default AaveMarket;
