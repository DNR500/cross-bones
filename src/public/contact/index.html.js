const template = require('./index.marko');

const renderModel = {
    title: 'contact us',
    description: 'this is is all about us',
    css: ['main.css'],
    js: ['main.js'],
};

module.exports = () => new Promise(resolve => resolve({ template, renderModel}));