import Base_PO from './Base_PO'

class Registeration_PO extends Base_PO {
  get emailInputField() {
    return $("#email");
  }

  get submitButton() {
    return $("#submit-button");
  }

  get emailAddress() {
    return "aofl" + Date.now() + "@gmail.com";
  }

  open() {
    super.open("./abt/register");
  }
}

export default new Registeration_PO()