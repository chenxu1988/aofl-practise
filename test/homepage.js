import HomePage_PO from '../pageobjects/HomePage_PO';

describe('Test aofl user registeration', () => {
  beforeEach(function() {
    HomePage_PO.open();
  })

  it('validate if navigate to the subscribe page', () => {
    const title = browser.getTitle;
    assert.equal(title, expectedTitle, `${title} should equal with ${HomePage_PO.expectedTitle}`);
  })

  it('Home page navigate to user registeration page by click sign up button', () => {
    const signup_button = $("[class='header-button abcmouse-sans']");
    //custom command created located in wdio.conf.js file under browser.addCommand
    browser.waitAndClick(HomePage_PO.signUpButton);
    assert.equal(HomePage_PO.currentUrl, HomePage_PO.expectedUrl);
  })
})