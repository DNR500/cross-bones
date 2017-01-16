import NightmareScreenshot from 'nightmare-screenshot';
import mkdirp from 'mkdirp';

export default (nightmare, filepath, cssSelector) => new Promise((resolve, reject) => {
    const directoryPath = filepath.match(/(.*[/])/)[0];
    mkdirp(directoryPath, (dirErr) => {
        if (dirErr) {
            reject(`Problem creating the screenshot directory:${directoryPath}\n${dirErr}`);
            return;
        }
        nightmare.use(NightmareScreenshot.screenshotSelector(filepath, cssSelector, (err) => {
            if (err) {
                reject(`Problem creating the screenshot:${filepath}\n${err}`);
                return;
            }
            resolve(filepath);
        }))
    });
});