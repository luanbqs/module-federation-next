const NextFederationPlugin = require("@module-federation/nextjs-mf");
const { FederatedTypesPlugin } = require("@module-federation/typescript");

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config, options) {
    const { isServer } = options;
    const remotes = {
      remote: `remote@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
    };
    const federatedConfig = {
      name: "host",
      remotes: remotes,
      filename: "host",
      shared: {},
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig),
      new FederatedTypesPlugin({ federationConfig: federatedConfig })
    );
    return config;
  },
};
module.exports = nextConfig;