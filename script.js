// script.js

// Generate a random CAPTCHA code
function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha-code').innerText = captcha;
  }
  
  // Refresh the CAPTCHA
  function refreshCaptcha() {
    generateCaptcha();
    document.getElementById('user-input').value = '';
  }
  
  // Validate the CAPTCHA on form submission
  function submitForm() {
    const captchaCode = document.getElementById('captcha-code').innerText;
    const userInput = document.getElementById('user-input').value;
  
    if (userInput === captchaCode) {
      alert('CAPTCHA validated! Form submitted successfully.');
    } else {
      alert('Invalid CAPTCHA. Please try again.');
      refreshCaptcha();
    }
  }
  
  // Event listeners for buttons
  window.onload = generateCaptcha;
  document.getElementById('refresh-btn').addEventListener('click', refreshCaptcha);
  document.getElementById('submit-btn').addEventListener('click', submitForm);
  