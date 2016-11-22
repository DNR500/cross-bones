const Visualizer = require('webpack-visualizer-plugin');

const testConfig = require('./webpack.test.config');

const reportConfig = {
  entry: {
    main: './src/public/bundles/main.js',
  },
  output: {
    path: `${__dirname}/report/bundles`,
    filename: '[name].bundle.[hash].js',
  },
  plugins: [
    new Visualizer({ filename: 'main.stats.html' }),
  ],
};

module.exports = Object.assign({}, testConfig, reportConfig);
