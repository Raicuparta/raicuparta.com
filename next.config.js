const withExportImages = require('next-export-optimize-images');
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

function webpack(config) {
  config.module.rules.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
}

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const env = {
    analyticsId: isProd ? 'UA-65658920-2' : undefined,
    isProd,
  };

  return withExportImages({
    env,
    webpack,
  });
};
