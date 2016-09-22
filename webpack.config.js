'use strict';

let testConfig = require('./webpack.test.config');

let HtmlWebpackPlugin = require('html-webpack-plugin');

let additionalBuildConfig = {
    entry: ['./src/public/js/index.js'],
    output: {
        path: __dirname + '/build/public/js',
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'simple app',
            filename: '../index.html',
            template: './src/public/index.html'
        })
    ]
};

module.exports = Object.assign({}, testConfig, additionalBuildConfig);
