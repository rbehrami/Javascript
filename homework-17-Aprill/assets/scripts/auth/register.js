import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function(){
    const formRegistration = document.querySelector(".register-form");
    const passLockIcon = document.querySelector(".pass-lock-icon");
    const passLockConfirmIcon = document.querySelector(".pass-lock-cficon");
    const inputPassword = document.getElementById("input-password");
    const inputConfirmPassword = document.getElementById("input-cfpassword");

    // Password visibility toggle
    passLockIcon.addEventListener("click", function(){
        inputPassword.type = inputPassword.type === "text" ? "password" : "text";
    });

    passLockConfirmIcon.addEventListener("click", function(){
        inputConfirmPassword.type = inputConfirmPassword.type === "text" ? "password" : "text";
    });

    formRegistration.addEventListener("submit", function(e){
        e.preventDefault();

        const inputFullName = document.getElementById("fullnameinput");
        const fullnameErrorMessage = document.getElementById("feedback-fullname");
        const inputEmail = document.getElementById("emilinput");
        const emailErrorMessage = document.getElementById("feedback-email");
        const feedbackPassword = document.getElementById("feedback-password");
        const feedbackConfPassword = document.getElementById("feedback-cfpassword");

        // Clear previous feedback
        fullnameErrorMessage.textContent = "";
        emailErrorMessage.textContent = "";
        feedbackPassword.textContent = "";
        feedbackConfPassword.textContent = "";

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        if(inputFullName.value.length < 5){
            fullnameErrorMessage.textContent = "Name must be at least 5 characters long.";
            return;
        }

        if(!emailRegex.test(inputEmail.value)){
            emailErrorMessage.textContent = "Please enter a valid email address in this format name@domain.com";
            return;
        }

        if(!passwordRegex.test(inputPassword.value)){
            feedbackPassword.textContent = "Password must be at least 6 characters long, contain one number and one uppercase letter";
            return;
        }

        if(inputPassword.value !== inputConfirmPassword.value){
            feedbackConfPassword.textContent = "Passwords do not match";
            return;
        }

        inputFullName.style.border = "3px solid green";
        inputEmail.style.border = "3px solid green";
        inputPassword.style.border = "3px solid green";
        inputConfirmPassword.style.border = "3px solid green";

        const payload = {
            name: inputFullName.value,
            email: inputEmail.value,
            password: inputPassword.value
        };

        localStorage.setItem(inputEmail.value, JSON.stringify(payload));
        window.location.href = "login.html";
    });
});