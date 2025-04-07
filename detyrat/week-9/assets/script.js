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

        const inputName = document.getElementById("inputName");
        const nameFeedback = document.getElementById("nameFeedback");
        const emailInput = document.getElementById("inputEmail");
        const errorEmail = document.getElementById("emailFeedback");
        const errorPassword = document.getElementById("passwordFeedback");
        const errorInputConfPassword = document.getElementById("pswcFeedback");
        const inputPhoneNumber = document.getElementById("phonenumber");
        const phoneNumberFeedback = document.getElementById("phonenumberfeedback");
        const errorAgeFeedback = document.getElementById("ageFeedback");
        const agreeFeedback = document.getElementById("agreefeedback");
        const maleRadioButton = document.getElementById("male");
        const femaleRadioButton = document.getElementById("female");
        const otherRadioButton = document.getElementById("other");
        const genderFeedback = document.getElementById("genderfeedback");
        const age = parseInt(document.getElementById("inputAge").value, 10);
        const agreementCheckbox = document.getElementById("agree");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        const phoneRegex = /^\+383[1-9][0-9]{6,7}$/;

        let conditionMet = true; // Start assuming all conditions are met

        // Reset all error messages
        errorEmail.textContent = "";
        errorPassword.textContent = "";
        errorInputConfPassword.textContent = "";
        errorAgeFeedback.textContent = "";
        agreeFeedback.textContent = "";


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

        if(!phoneRegex.test(inputPhoneNumber.value)){
            phoneNumberFeedback.textContent = "Phone number is not valid. Please write in this format +383xxxxxxxx";
            conditionMet = false;
        }

        if (isNaN(age) || age < 18 || age > 99) {
            errorAgeFeedback.textContent = "Age must be a number between 18 and 99.";
            conditionMet = false;
        }
/*
        if (maleRadioButton.checked) {
            console.log("Male is selected");
        } else if (femaleRadioButton.checked) {
            console.log("Female is selected");
        } else if (otherRadioButton.checked) {
            console.log("Other is selected");
        } else {
            genderFeedback.textContent = "You must select the gender.";
            console.log("No gender is selected");
            conditionMet = false;
        }*/

        if(!maleRadioButton.checked && !femaleRadioButton.checked && !otherRadioButton.checked){
            genderFeedback.textContent = "You must select the gender.";
            conditionMet = false;
        }
    
        if (!agreementCheckbox.checked) {
            agreeFeedback.textContent = "You must agree to the terms and conditions to proceed.";
            conditionMet = false;
        }

        if (conditionMet) {
            window.location.href = "welcome.html"; // Redirect to the target page
        } else {
            console.log("Conditions not met. Please fix the errors above.");
        }
    });
});
