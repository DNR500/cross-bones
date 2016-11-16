describe('Home page', function() {
  before(function() {
    casper.start('http://localhost:3000');
  });
  it('should have an element in DOM', function(){
    casper.waitForSelector('body', function() {
      expect('body').to.be.inDOM;
    });
  });
});
