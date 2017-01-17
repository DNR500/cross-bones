import fs from 'fs';
import mkdirp from 'mkdirp';

export default actualFilePath => new Promise((resolve, reject) => {

    const expectedFilePath = actualFilePath.replace('/screenshot/actual/', '/screenshot/expected/');

    const output = { expectedFilePath, actualFilePath };

    fs.stat(expectedFilePath, function(statErr, stats) {
        if (statErr) {
            const directoryPath = expectedFilePath.match(/(.*[/])/)[0];
            mkdirp(directoryPath, (dirErr) => {
                if (dirErr) {
                    reject(`Unable to create directory:${directoryPath}\n${dirErr}`);
                    return;
                }
                fs.rename(actualFilePath, expectedFilePath, (renameErr) => {
                    if (renameErr) {
                        reject(`Problem copying file:${actualFilePath}\n${renameErr}`);
                        return;
                    }

                    reject(new Error(`PLEASE-RUN-AGAIN - generating initial expected image:${expectedFilePath}`));
                });
            });
            return;
        }
        if(stats.isFile()) {
            resolve(Object.assign({ expectedFileExists: true }, output));
            return;
        }
    });
});
