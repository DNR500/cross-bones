const template = require('./about.marko');

const renderModel = {
    title: 'about us',
    description: 'this is is all about us',
    css: ['main.css'],
    js: ['main.js'],
};

module.exports = () => new Promise(resolve => resolve({ template, renderModel}));