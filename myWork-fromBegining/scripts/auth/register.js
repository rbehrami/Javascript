import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.querySelector(".register-form");
    const passLockIcon = document.querySelector(".pass-lock-icon");
    const inputPassword = document.getElementById("input-password");
    const inputConfPassword = document.getElementById("confirm-password");
    const passConfLockIcon = document.querySelector(".pass-confirm-lock-icon");

    // Add event listener for password visibility toggle
    passLockIcon.addEventListener("click", function() {
        inputPassword.type = inputPassword.type === "text" ? "password" : "text";
    });

    // Add event listener for confirm password visibility toggle
    passConfLockIcon.addEventListener("click", function() {
        inputConfPassword.type = inputConfPassword.type === "text" ? "password" : "text";
    });

    registerForm.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent the page reload

        const inputName = document.getElementById("inputname");
        const nameFeedback = document.getElementById("namefeedback");
        const emailInput = document.getElementById("inputemail");
        const errorEmail = document.getElementById("emailfeedback");
        const errorPassword = document.getElementById("passwordfeedback");
        const errorInputConfPassword = document.getElementById("pswcFeedback");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        let conditionMet = true; // Start assuming all conditions are met

        // Reset all error messages

        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorInputConfPassword.textContent = "";


        if (inputName.value.length < 3) {
            nameFeedback.textContent = "Name must be at least 3 characters long.";
            conditionMet = false;
        }

        if (!emailRegex.test(emailInput.value)) {
            errorEmail.textContent = "Please enter a valid email address in this format name@domain.com.";
            conditionMet = false;
        }

        if (!passwordRegex.test(inputPassword.value)) {
            errorPassword.textContent = "Password must be at least 6 characters long, contain one number and one uppercase letter.";
            conditionMet = false;
        }

        if (inputPassword.value !== inputConfPassword.value) {
            errorInputConfPassword.textContent = "Passwords do not match.";
            conditionMet = false;
        }

        inputName.style.border= "2px solid green";
        emailInput.style.border = "2px solid green";
        inputPassword.style.border = "2px solid green";
        inputConfPassword.style.border = "2px solid green";

        const payload = {
            email: emailInput.value,
            password: inputPassword.value,
        };

        localStorage.setItem(emailInput.value, JSON.stringify(payload));


        if (conditionMet) {
            window.location.href = "login_page.html"; // Redirect to the target page
        } else {
            console.log("Conditions not met. Please fix the errors above.");
        }
    });
});
