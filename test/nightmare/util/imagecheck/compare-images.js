const fs = require('fs');
const resemble = require('node-resemble-js');

const loadImage = filepath => new Promise((resolve, reject) => {
    fs.readFile(filepath, (err, data) => {
        if (err || !data) {
            reject(`Problem loading image: ${filepath}\n${err}`);
            return;
        }
        resolve(data);
    });
});

const compare = images => new Promise((resolve, reject) => {
    if (!images || images.length < 2) {
        reject(new Error('two images are required for comparison'));
        return;
    }
    resemble(images[0]).compareTo(images[1]).onComplete(function(data){
        resolve(data);
    });
});

export default (imageInfo) => {
    if (!imageInfo.actualFilePath || !imageInfo.expectedFilePath) {
        throw(new Error('Two image paths required: actual & expected'));
    }

    var loading = [
        loadImage(imageInfo.actualFilePath),
        loadImage(imageInfo.expectedFilePath),
    ]

    return Promise.all(loading)
        .then(compare.bind(null));
};

