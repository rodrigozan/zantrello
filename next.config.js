/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb://localhost:27017/zantrello',
  },
  experimental: {
    esmExternals: "loose", 
    serverComponentsExternalPackages: ["mongoose"] 
  },
  webpack: (config) => {
    config.experiments = {
      topLevelAwait: true
    };
    return config;
  },
}

module.exports = nextConfig
