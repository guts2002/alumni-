// app.js
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.sign-in-form');
    const signUpForm = document.querySelector('.sign-up-form');
  
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      if (validateLoginForm()) {
        window.location.href = 'information.html'; // Redirect to information.html
      }
    });
  
    signUpForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent the default form submission behavior
      if (validateSignUpForm()) {
        window.location.href = 'information.html'; // Redirect to information.html
      }
    });
  
    const validateLoginForm = () => {
      const username = loginForm.querySelector('input[type="text"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
  
      // Add your login validation logic here
      if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return false;
      }
  
      // Additional login validation logic can be added here if needed
  
      return true;
    };
  
    const validateSignUpForm = () => {
      const username = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;
      const confirmPassword = signUpForm.querySelector('input[placeholder="Confirm Password"]').value;
  
      // Add your signup validation logic here
      if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        alert('Please fill in all fields');
        return false;
      }
  
      // Check if the password and confirm password match
      if (password !== confirmPassword) {
        alert('Password and Confirm Password do not match');
        return false;
      }
  
      // Additional signup validation logic
      if (password.length < 8) {
        alert('Password must be at least 8 characters long');
        return false;
      }
  
      // You can add more conditions as needed
  
      return true;
    };
  });
  
  const sign_in_btn = document.querySelector('#sign-in-btn');
  const sign_up_btn = document.querySelector('#sign-up-btn');
  const container = document.querySelector('.container');
  
  sign_up_btn.addEventListener('click', () => {
    if (container.classList.contains('sign-up-mode')) {
      // If already in sign-up mode, validate the form before allowing the switch
      if (validateSignUpForm()) {
        container.classList.remove('sign-up-mode');
      }
    } else {
      container.classList.add('sign-up-mode');
    }
  });
  
  sign_in_btn.addEventListener('click', () => {
    if (container.classList.contains('sign-up-mode')) {
      container.classList.remove('sign-up-mode');
    }
  });