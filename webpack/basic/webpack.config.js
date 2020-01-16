const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, argv = {}) => {
  const { mode } = argv;
  const { NODE_ENV } = process.env;

  const isDevelopment = mode === 'development' || NODE_ENV === 'development';

  return {
    mode: isDevelopment ? 'development' : 'production',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader'
        }
      ]
    },
    plugins: [isDevelopment && new HtmlWebpackPlugin()].filter(Boolean),
    devtool: isDevelopment && 'eval-source-map'
  };
};
