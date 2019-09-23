const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const PnpWebpackPlugin = require('pnp-webpack-plugin');
const CaseSensitivePathsWebpackPlugin = require('case-sensitive-paths-webpack-plugin');

const banner = fs.readFileSync('./config/banner.txt', 'utf-8');
const envs = require('./config/environments');

const config = {
  mode: process.env.NODE_ENV,
  target: 'node',
  externals: [nodeExternals()],
  name: process.env.NAME,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.', '.js'],
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    plugins: [PnpWebpackPlugin]
  },
  resolveLoader: {
    plugins: [PnpWebpackPlugin.moduleLoader(module)]
  },
  module: {
    strictExportPresence: true,
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner,
      entryOnly: true
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(envs)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.ProvidePlugin({
      log: path.resolve(__dirname, 'config', 'log')
    })
  ]
};

module.exports = () => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development') {
    config.plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new CaseSensitivePathsWebpackPlugin()
    );

    config.devtool = 'eval-source-map';
  }

  if (NODE_ENV === 'production') {
    config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());

    config.bail = true;
  }

  return config;
};
