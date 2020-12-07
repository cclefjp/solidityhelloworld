var HelloWorldCclef = artifacts.require("HelloWorldCclef");

module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(HelloWorldCclef);
};
