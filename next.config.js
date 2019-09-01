module.exports = {
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ricardo-lopes-dev' : '',
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  }
};
