const webpack = require('webpack');

const testConfig = require('./webpack.test.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

const ManifestPlugin = require('webpack-manifest-plugin');

testConfig.module.loaders = [
  ...testConfig.module.loaders,
  {
    test: /\.scss$/,
    loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
  },
  {
    test: /\.(eot|svg|ttf|woff|woff2)$/,
    loader: 'file?name=../fonts/[name].[ext]',
  },
];

const additionalBuildConfig = {
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
  ],
  postcss: () => [autoprefixer],
};

module.exports = Object.assign({}, testConfig, additionalBuildConfig);
