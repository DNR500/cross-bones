'use strict';

const testConfig = require('./webpack.test.config');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ManifestPlugin = require('webpack-manifest-plugin');

let additionalBuildConfig = {
    entry: ['./src/public/js/index.js'],
    output: {
        path: __dirname + '/build/public/js',
        filename: 'index.bundle.[hash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'simple app',
            filename: '../index.html',
            template: './src/public/index.html'
        }),
        new ManifestPlugin()
    ]
};

module.exports = Object.assign({}, testConfig, additionalBuildConfig);
