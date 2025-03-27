let randomNumber = Math.trunc(Math.random() * 20) + 1;

document.addEventListener("DOMContentLoaded", function () {
  const inputElement = document.getElementsByClassName("input")[0];
  const checkButtnElement = document.getElementById("guess-btn");
  const feedbackElement = document.getElementsByClassName("feedback")[0];
  const scoreElement = document.getElementsByClassName("score")[0];
  const startAgainElement =
    document.getElementsByClassName("start-again-btn")[0];
  let score = Number(scoreElement.innerHTML);

  checkButtnElement.addEventListener("click", function () {
    function checkScore(score, feedbackText, color) {
      if (score > 1) {
        feedbackElement.innerHTML = feedbackText;
        feedbackElement.style.color = color;
      } else {
        feedbackElement.innerHTML = "💥 Game over!";
        feedbackElement.style.color = "red";
      }
    }

    if (inputElement.value == randomNumber) {
      checkScore(score, "✅ Congratulations, you won the game!", "red");
    } else if (inputElement.value < randomNumber) {
      checkScore(score, "❌ Your guess doesn't match your input name!", "red");
      score--;
    } else {
      checkScore(score, "❌ Your guess is too high!", "red");
      score--;
    }

    console.log("score", score);
    console.log("randomNumber", randomNumber);
    scoreElement.innerHTML = score;
  });

  startAgainElement.addEventListener("click", function () {
    scoreElement.innerHTML = 20;
    randomNumber = Math.trunc(Math.random() * 20) + 1;
    inputElement.value = "";
    feedbackElement.innerHTML = "";
  });
});