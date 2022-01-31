require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z94GEUOoALqthhrcvaHJ4IFrP_8YQqJ0',
      accounts: [ '44ca3fe7984d4ea800ba2ee2a3b37df5695065b7183a8b8c2afbf7366ef31734' ]
    }
  }
}