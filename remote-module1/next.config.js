const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");
const federatedConfig = {
  name: "remote",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./RemoteNext": "./src/components/Robot.tsx",
  },
  shared: {},
};
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    config.plugins.push(
      new NextFederationPlugin(federatedConfig),
      new FederatedTypesPlugin({ federationConfig: federatedConfig })
    );
    return config;
  },
};
module.exports = nextConfig;