const form = document.querySelector('.login-form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const recaptchaInput = document.querySelector('#recaptcha');

form.addEventListener('submit', (e) => {
  if (usernameInput.value!== '' && passwordInput.value!== '' && recaptchaInput.checked) {
    // Form is valid, submit the form
    form.submit();
  } else {
    e.preventDefault();
    alert('Please fill in all required fields and check the recaptcha box');
  }
});