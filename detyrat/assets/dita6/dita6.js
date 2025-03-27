const names = ["Rasim", "Xheneta", "Anes","Sara","Anisa","Enis","Bleor","Diart","Ardit","Orges","Jon","Albert","Mejreme","Bleart","Leon"];
document.getElementById("arrayName").innerHTML=names;
const randomName = names[Math.floor(Math.random() * names.length)];

function checkName(){
        const inputNameElement = document.getElementById("input").value.trim();
        const feedBackElement = document.querySelector(".feedback");
        const attemptsElement = document.querySelector(".attempts");
        let attempts = Number(attemptsElement.innerHTML);

    if(inputNameElement.toLowerCase() === randomName.toLocaleLowerCase()){       
        feedBackElement.innerHTML="Congratulations!, your name matches.";
        feedBackElement.style.color = "green";
    }else{
        feedBackElement.innerHTML = "Oops! Your name doesn't match.";
        feedBackElement.style.color = "red";
        attempts--;
        attemptsElement.innerHTML = attempts;

    // Check if the failed score has reached 0 attempts
    if (attempts <= 0) {
        feedBackElement.innerHTML = "Sorry, you've run out of attempts!";
        feedBackElement.style.color = "orange";
        document.getElementById("input").disabled = true;  // Disable input field
        document.querySelector("button").disabled = true;  // Disable the button
        } 
    }
}