const productionConfig = require('./webpack.config');

const Visualizer = require('webpack-visualizer-plugin');

const reportConfig = Object.assign({}, productionConfig);

reportConfig.plugins.push(new Visualizer({ filename: '../../../report/bundles/stats.html' }));

module.exports = reportConfig;
