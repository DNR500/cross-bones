import FirstQuestionEntity from '../pageobjects/firstquestionentity';

describe('Home page', () => {

    before(() => {
        FirstQuestionEntity.init('http://localhost:18070/engage/relational-quiz/9fe2fbcf-4913-41e7-9c7a-1e22d8c924ec');
    });

    it('should have the correct title', (done) => {
        FirstQuestionEntity.hasCorrectHTMLPageTitle()
            .then(() => done())
            .catch(e => { console.error(e); throw(e); });
    }).timeout(10000);

    it('should look correctly presented', (done) => {
        FirstQuestionEntity.initialPageLooksCorrect()
            .then(() => done())
            .catch(e => { console.error(e); throw(e); });
    }).timeout(10000);

    it('should present the quesstion answers correctly', (done) => {
        FirstQuestionEntity.questionAnswersLooksCorrect()
            .then(() => done())
            .catch((e) => { console.error(e); throw(e); });
    });

});