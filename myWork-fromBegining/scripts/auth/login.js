import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.querySelector(".login-form");

    const passLockIcon = document.querySelector(".pass-lock-icon");
    const inputPassword = document.getElementById("input-password");

    // Add event listener for password visibility toggle
    passLockIcon.addEventListener("click", function() {
    inputPassword.type = inputPassword.type === "text" ? "password" : "text";
});

loginForm.addEventListener("submit", function(e){
    e.preventDefault();

    const inputEmail = document.getElementById("inputemail");
    const emailFeedBack = document.getElementById("emailfeedback");
    const inputPassword = document.getElementById("input-password");
    const feedBackPassword = document.getElementById("passwordfeedback");

    const userPayload = localStorage.getItem(inputEmail.value);
    if (!userPayload) {
        emailFeedBack.innerHTML = "This user does not exist!";
        return;
    }
    const user = JSON.parse(userPayload);
    if(inputPassword.value!=user.password){
        passwordFeedback.textContent = "Password is not Correct!";
        return;
    }

    window.location.href = "home.html";
});
});