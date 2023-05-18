//validate form and prevent default for contact us
let nameInput = document.querySelector("[name='name']");
let mobileInput = document.querySelector("[name='mobile']");
let emailInput = document.querySelector("[name='email']");
let messageInput = document.querySelector("[name='message']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let phoneValid = false;
  let emailValid = false;
  let messageValid = false;

  if (nameInput.value !== "") {
    userValid = true;
  }
  if (emailInput.value !== "") {
    emailValid = true;
  }
  if (mobileInput.value !== "" && mobileInput.value.length == 11) {
    phoneValid = true;
  }
  if (messageInput.value !== "") {
    messageValid = true;
  }
  if (
    userValid === false ||
    phoneValid === false ||
    emailValid === false ||
    messageValid === false
  ) {
    e.preventDefault();
  }
};
