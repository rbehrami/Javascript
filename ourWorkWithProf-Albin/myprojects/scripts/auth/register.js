import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("register-form");
  const passLockIcon = document.querySelector(".pass-lock-icon");
  const passInput = document.querySelector(".pass-input");
  const passConfirmInput = document.querySelector(".pass-confirm-input");
  const passConfirmLockIcon = document.querySelector(".pass-confirm-lock-icon");
  passLockIcon.addEventListener("click", function () {
    passInput.type = passInput.type == "text" ? "password" : "text";
  });

  passConfirmLockIcon.addEventListener("click", function () {
    passConfirmInput.type =
      passConfirmInput.type == "text" ? "password" : "text";
  });

  registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); //dont reload the page
    const emailInput = document.querySelector(".email-input");
    const passInput = document.querySelector(".pass-input");
    const passConfirmInput = document.querySelector(".pass-confirm-input");
    const feedback = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedback-text");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^()\-_=+])[A-Za-z\d@$!%*?#&^()\-_=+]{8,}$/;

    if (!emailRegex.test(emailInput.value)) {
      feedback.classList.remove("dont-display");
      feedbackText.innerHTML = "This email is not correct!";
      emailInput.style.border = "3px solid red";
      return;
    }

    if (!passwordRegex.test(passInput.value)) {
      feedback.classList.remove("dont-display");
      passInput.style.border = "3px solid red";
      feedbackText.innerHTML = "This password is not correct!";
      return;
    }

    if (!passwordRegex.test(passConfirmInput.value)) {
      feedback.classList.remove("dont-display");
      passConfirmInput.style.border = "3px solid red";
      feedbackText.innerHTML = "Confirm password is not correct!";
      return;
    }

    if (passInput.value !== passConfirmInput.value) {
      feedback.classList.remove("dont-display");
      passConfirmInput.style.border = "3px solid red";
      passInput.style.border = "3px solid red";
      feedbackText.innerHTML = "Passwords did not match!";
      return;
    }

    // kodin qe dojm mu ekzekutu /
    passInput.style.border = "3px solid green";
    emailInput.style.border = "3px solid green";
    passConfirmInput.style.border = "3px solid green";
    document.querySelector(".card").style.border = "3px solid green";

    const payload = {
      email: emailInput.value,
      password: passInput.value,
    };

    localStorage.setItem(emailInput.value, JSON.stringify(payload));
    window.location.href = "login.html";
  });
});
