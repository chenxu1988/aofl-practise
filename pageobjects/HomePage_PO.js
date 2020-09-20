import Base_PO from './Base_PO'

class HomePage_PO extends Base_PO {
  get signUpButton() {
    return $("[class='button aofl_sans_bold subscribe']");
  }

  get expectedTitle() {
    return "ABCmouse: Educational Games, Books, Puzzles & Songs for Kids & Toddlers"
  }

  get expectedUrl() {
    return "https://www.abcmouse.com/abt/register";
  }

  get currentUrl() {
    return browser.getUrl();
  }

  open() {
    super.open("./");
  }
}

export default new HomePage_PO();