// Get elements for Shows, Movies, and Genres buttons
const showsButton = document.getElementById('showsButton');
const moviesButton = document.getElementById('moviesButton');
const genresButton = document.getElementById('genresButton');

// Get elements for the dropdown contents
const showsDropdown = document.getElementById('showsDropdown');
const moviesDropdown = document.getElementById('moviesDropdown');
const genresDropdown = document.getElementById('genresDropdown');

// Toggle the dropdown visibility when the respective buttons are clicked
if (showsButton) {
  showsButton.addEventListener('click', () => {
    showsDropdown.classList.toggle('show');
    moviesDropdown.classList.remove('show');
    genresDropdown.classList.remove('show');
  });
}

if (moviesButton) {
  moviesButton.addEventListener('click', () => {
    moviesDropdown.classList.toggle('show');
    showsDropdown.classList.remove('show');
    genresDropdown.classList.remove('show');
  });
}

if (genresButton) {
  genresButton.addEventListener('click', () => {
    genresDropdown.classList.toggle('show');
    showsDropdown.classList.remove('show');
    moviesDropdown.classList.remove('show');
  });
}

  
  // Handle Sign In and Sign Up Navigation
  document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('#sign-in');
    const signUpButton = document.querySelector('#sign-up');
  
    if (signInButton) {
      signInButton.addEventListener('click', () => {
        window.location.href = 'signin.html';
      });
    }
  
    if (signUpButton) {
        signUpButton.addEventListener('click', () => {
          window.location.href = './signup.html'; // Ensure the correct relative path
        });
      }
  });
  
  // Form Validation for Sign In and Sign Up Pages
  function validateSignInForm(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    if (!email || !password) {
      alert('Please fill in all fields.');
      return false;
    }
  
    // Placeholder: Add your actual authentication logic here
    alert('Sign In Successful!');
    return true;
  }
  
  function validateSignUpForm(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirm-password').value;
  
    if (!name || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return false;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return false;
    }
  
    // Placeholder: Add your actual registration logic here
    alert('Sign Up Successful!');
    return true;
  }
  
  // Attach validation functions to forms
  document.addEventListener('DOMContentLoaded', () => {
    const signInForm = document.querySelector('.signin-form');
    const signUpForm = document.querySelector('.signup-form');
  
    if (signInForm) {
      signInForm.addEventListener('submit', validateSignInForm);
    }
  
    if (signUpForm) {
      signUpForm.addEventListener('submit', validateSignUpForm);
    }
  });
  