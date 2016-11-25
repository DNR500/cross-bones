require('marko/node-require').install();

const bundleUtils = require('../../scripts/utils/bundle-utils');

const template = require('./about.marko');

const renderModel = {
    title: 'about us',
    description: 'this is is all about us',
    css: [],
    js: [],
};

const createFromTemplate = (model) => new Promise((resolve, reject) => {
    template.render(model, (err, output) => {
        console.log(model)
        if (err) {
            reject(err);
            return;
        }
        resolve(output);
    });
});

const gatherBundlesListing = (bundlesLists) => Promise.all([
            bundleUtils.getHashedFilenames(...bundlesLists.css),
            bundleUtils.getHashedFilenames(...bundlesLists.js),
        ])
        .then(bundlesLists => {
            renderModel.css = bundlesLists[0];
            renderModel.js = bundlesLists[1];
            return renderModel;
        });

const output = () => gatherBundlesListing({ css:['main.css'], js:['main.js']}).then(createFromTemplate);

module.exports = output;