import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.min.js";

document.addEventListener("DOMContentLoaded", function(){
    const editForm = document.getElementById("editUserForm");

    editForm.addEventListener("submit", function(e){
        e.preventDefault();

        const inputFullName = document.getElementById("editName");
        const inputEmail = document.getElementById("editEmail");
        const inputDepartment = document.getElementById("department");
        const inputTeacherName = document.getElementById("teacher");
        const inputAddress = document.getElementById("address");
        const inputCountry = document.getElementById("country");
        const inputTelephone = document.getElementById("telephone");

        const isAuthenticated = localStorage.getItem(inputEmail.value);
        console.log("isAuthenticated", typeof isAuthenticated);

        if (!isAuthenticated && typeof isAuthenticated == "string") {
        console.log("You are not authenticated to update these data!");
        return;
    }

         // The user is authenticated to modify the data
        const user = JSON.parse(isAuthenticated);
        // add the properites the user gave in the form
        const updatedUser = {
        ...user, //paste here the fields that existed for the user
            fullname: inputFullName.value,
            department: inputDepartment.value,
            teacher: inputTeacherName.value,
            telephone: inputTelephone.value,
            address: inputAddress.value,
            country: inputCountry.value,
            email: inputEmail.value,
    };

    localStorage.setItem(editEmail.value, JSON.stringify(updatedUser));

    console.log("inputFullName", editName.value);
    console.log("inputDepartment", department.value);
    console.log("inputTeacher", teacher.value);
    console.log("inputTelephone", telephone.value);
    console.log("inputEmail", editEmail.value);
    console.log("inputAddress", inputAddress.value);
    console.log("inputCountry", inputCountry.value);

    window.location.href = "dashboard.html";
    });
});