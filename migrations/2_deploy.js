const UniswapV2Factory = artifacts.require("UniswapV2Factory");

const FEE_TO_SETTER_ADDRESS = "0x87bF9c6459C05c136BF74d010691Cd79d36dbE0F"

module.exports = function (deployer) {
  deployer.deploy(UniswapV2Factory, FEE_TO_SETTER_ADDRESS);
};
