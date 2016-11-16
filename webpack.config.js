const webpack = require('webpack');

const testConfig = require('./webpack.test.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');

const additionalBuildConfig = {
  entry: ['./src/public/js/index.js'],
  output: {
    path: `${__dirname}/build/public/js`,
    filename: 'index.bundle.[hash].js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new HtmlWebpackPlugin({
      title: 'simple app',
      filename: '../index.html',
      template: './src/public/index.html',
    }),
    new ManifestPlugin(),
  ],
};

module.exports = Object.assign({}, testConfig, additionalBuildConfig);
