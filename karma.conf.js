module.exports = function karmaConfig(config) {
    config.set({
        logLevel: config.LOG_INFO,

        client: {captureConsole: true},

        frameworks: ['mocha', 'es6-shim'],

        reporters: ['progress'],

        files: ['./src/public/js/specs.karma.js'],

        preprocessors: {
            './src/public/js/specs.karma.js': ['webpack', 'sourcemap']
        },

        browsers: ['PhantomJS'],

        singleRun: true,

        webpack: require('./webpack.test.config'),

        webpackMiddleware: {
            noInfo: 'errors-only'
        }
    });
};