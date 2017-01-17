import takeScreenshot from '../util/imagecheck/take-screenshot';
import checkExpectedFileExists from '../util/imagecheck/check-expected-file-exists';
import compareImages from '../util/imagecheck/compare-images';

import Nightmare from 'nightmare';
import { expect } from 'chai';

let url;

const init = pageUrl => {
    url = pageUrl;
};

const establishEntity = () => Nightmare().goto(url);

const hasCorrectHTMLPageTitle = () => establishEntity()
        .evaluate(() => document.title )
        .end()
        .then((titleText) => {
            expect(titleText).to.equal('Home');
        });

const initialPageLooksCorrect = () => takeScreenshot(establishEntity(),
                                        `${process.cwd()}/test/nightmare/screenshot/actual/fullscreen.png`, 'body')
        .then(checkExpectedFileExists.bind(null))
        .then(compareImages.bind(null))
        .then(comparisonData => {
            expect(comparisonData.isSameDimensions).to.be.true;
            expect(parseFloat(comparisonData.misMatchPercentage)).to.be.below(0.1);
        });

export default {
    init,
    hasCorrectHTMLPageTitle,
    initialPageLooksCorrect,
}