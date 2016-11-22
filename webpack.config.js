const webpack = require('webpack');

const testConfig = require('./webpack.test.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const WebpackCleanUpPlugin = require('webpack-cleanup-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');

const autoprefixer = require('autoprefixer');

const stylesDev = 'css?sourceMap!postcss?sourceMap!sass?sourceMap=true';
const stylesProd = 'css!postcss!sass';
const isProduction = process.env.NODE_ENV === 'production';

const additionalBuildConfig = {
  devtool: isProduction ? undefined : 'source-map',
  entry: {
    main: [
      './src/public/bundles/main.js',
      './src/public/bundles/main.scss',
    ],
  },
  output: {
    path: `${__dirname}/build/public/bundles`,
    filename: '[name].bundle.[hash].js',
  },
  module: {
    loaders: [
      ...testConfig.module.loaders,
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', isProduction ? stylesProd : stylesDev),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file?name=../fonts/[name].[ext]',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
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
    new ExtractTextPlugin('[name].bundle.[hash].css'),
    new WebpackCleanUpPlugin(),
  ],
  postcss: () => [autoprefixer],
};

module.exports = Object.assign({}, testConfig, additionalBuildConfig);
