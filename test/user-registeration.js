import Registeration_PO from '../pageobjects/Registeration_PO'
import Subscription_PO from '../pageobjects/Subscription_PO'

describe('Test aofl user registeration', () => {
  beforeEach(function() {
    Registeration_PO.open();
  })

  it('User registeration page navigate to subscription page test', () => {
    //custom command created located in wdio.conf.js file under browser.addCommand
    browser.waitAndSendkeys(Registeration_PO.emailInputField, Registeration_PO.emailAddress);
    browser.waitAndClick(Registeration_PO.submitButton)

    assert.equal(Subscription_PO.currentUrl, Subscription_PO.expectedUrl);
    assert.equal(Subscription_PO.currentText, Subscription_PO.expectedText);
  })
})