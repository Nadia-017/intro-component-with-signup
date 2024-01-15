
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('loginForm');
  const firstNameInput = document.getElementById('firstname');
  const lastNameInput = document.getElementById('lastname');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('btn_submit');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    if (validateForm()) {

      alert('Form submitted successfully!');
    }
  });

  function validateForm() {
    if (
      firstNameInput.value.trim() === '' ||
      lastNameInput.value.trim() === '' ||
      emailInput.value.trim() === '' ||
      passwordInput.value.trim() === ''
    ) {
      alert('Please fill in all fields');
      return false;
    }


    return true;
  }
});
