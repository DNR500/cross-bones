import IndexPage from '../pageobjects/indexpage';

describe('Home page', () => {

    before(() => {
        IndexPage.init('http://localhost:3000/');
    });

    it('should have the correct title', (done) => {
        IndexPage.hasCorrectHTMLPageTitle()
            .then(() => done())
            .catch(e => { console.error(e); throw(e); });
    }).timeout(5000);

    it('should look correctly presented', (done) => {
        IndexPage.initialPageLooksCorrect()
            .then(() => done())
            .catch(e => { console.error(e); throw(e); });
    }).timeout(5000);

});