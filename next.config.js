/** @type {import('next').NextConfig} */
const withFonts = require("next-fonts");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["unsplash.com"],
  },
};

module.exports = withFonts({
  webpack(config, options) {
    return config;
  },
});

module.exports = nextConfig;
