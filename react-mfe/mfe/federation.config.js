const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "mfe-react",

  exposes: {
    "./component": "./mfe/bootstrap",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },

  // skip: [
  //   '@softarc/native-federation'
  // ]
});
