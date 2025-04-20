import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const passLockIcon = document.querySelector(".pass-lock-icon");
  const lockInputPassword = document.getElementById("input-password");

  // Toggle password visibility
  passLockIcon.addEventListener("click", function () {
    lockInputPassword.type = lockInputPassword.type === "text" ? "password" : "text";
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const inputEmail = document.getElementById("inputemail");
    const emailFeedBack = document.getElementById("emailfeedback");
    const inputPassword = document.getElementById("input-password");
    const feedBackPassword = document.getElementById("passwordfeedback");

    // Clear old messages
    emailFeedBack.textContent = "";
    feedBackPassword.textContent = "";

    let conditionMet = true;

    const userPayload = localStorage.getItem(inputEmail.value);
    let user = null;

    if (!userPayload) {
      emailFeedBack.innerHTML = "This user does not exist!";
      conditionMet = false;
    } else {
      try {
        user = JSON.parse(userPayload);
      } catch (error) {
        emailFeedBack.innerHTML = "User data is corrupted!";
        conditionMet = false;
      }

      if (user && inputPassword.value !== user.password) {
        feedBackPassword.textContent = "Password is not correct!";
        conditionMet = false;
      }
    }

    if (conditionMet) {
      window.location.href = "dashboard.html"; // or your target page
    } else {
      console.log("Conditions not met. Please fix the errors above.");
    }
  });
});
