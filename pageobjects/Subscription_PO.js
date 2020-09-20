import Base_PO from './Base_PO'

class Subscription_PO extends Base_PO {
  get currentText() {
    return $(".page-tag").getText();
  }

  get expectedText() {
    return "Become a Member!"
  }

  get currentUrl() {
    return browser.getUrl();
  }

  get expectedUrl() {
    return "https://www.abcmouse.com/abt/subscription"
  }

  open() {
    super.open("./abt/subscription");
  }
}

export default new Subscription_PO()