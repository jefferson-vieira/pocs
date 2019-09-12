module.exports = api => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      ['@babel/preset-env', { targets: { node: 'current', esmodules: true } }]
    ],
    env: {
      production: {
        presets: ['minify']
      }
    }
  };
};
