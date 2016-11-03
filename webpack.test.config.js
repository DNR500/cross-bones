'use strict';

module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    babelrc: false
                }
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    },
    htmlLoader: {
        attrs: false
    }
}