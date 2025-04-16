document.addEventListener("DOMContentLoaded", function(){
    const logoutButton = document.getElementById("logout");

    logoutButton.addEventListener("click",function(){
        console.log("Logout button clicke");
        localStorage.clear();
        window.location.href="login.html";
    });
});