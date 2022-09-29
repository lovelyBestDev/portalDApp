require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/6b441de391c142c3b5742f8467752df7',
      accounts: ['ee31531f1b55b97956bf17011dcae5d0df5d5b5881cb5d5ba8c830ddaa837c4a'],
      chainId: 4
    },
    testnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
      accounts: ['ee31531f1b55b97956bf17011dcae5d0df5d5b5881cb5d5ba8c830ddaa837c4a'],
      chainId: 97
    }
  }
};
