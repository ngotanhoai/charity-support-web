require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/wMWLxSrAx8u-04aT7zXL8Cn2fcxs2ruy',
      accounts: [''],
    },
  },
};