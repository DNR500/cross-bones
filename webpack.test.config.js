module.exports = {
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
            {test: /\.html$/, loader: 'html'}
        ]
    },
    htmlLoader: {
        attrs: false
    }
}