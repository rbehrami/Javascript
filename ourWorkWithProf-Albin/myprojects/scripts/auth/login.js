import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded", function () {
  const passLockIcon = document.querySelector(".pass-lock-icon");
  const loginForm = document.getElementById("login-form");

  passLockIcon.addEventListener("click", function () {
    passInput.type = passInput.type == "text" ? "password" : "text";
  });

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = document.querySelector(".email-input");
    const passInput = document.querySelector(".pass-input");
    const feedback = document.getElementById("feedback");
    const feedbackText = document.getElementById("feedback-text");

    const userPayload = localStorage.getItem(emailInput.value);
    if (!userPayload) {
      feedback.classList.remove("dont-display");
      feedbackText.innerHTML = "This user does not exist!";
      return;
    }
    const user = JSON.parse(userPayload);

    if (passInput.value != user.password) {
      feedbackText.innerHTML = "Password is not correct!!";
      return;
    }

    // pe dina qe gjithcka osht ne rregull
    window.location.href = "app.html";
  });
});
