const bundlesUtils = require('./utils/bundle-utils');

bundlesUtils.getHashedFilename('main.css').then((filename) => {
    console.info(filename);
}).catch((err) => {
    console.error(err);
});

// create list of scripts to include

// create list of styles