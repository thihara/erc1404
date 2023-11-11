const ERC1404Impl = artifacts.require("./ERC1404Impl.sol");

module.exports = function(_deployer) {
    _deployer.deploy(ERC1404Impl, "LNK","LNK1", 85000);
};
