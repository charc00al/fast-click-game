var btn = document.querySelector(".btn");
var score = document.querySelector(".score");
var highScore = document.querySelector(".highest-score")

var counter = 0;
var score_counter

// game, listen to click on button
btn.addEventListener("click", function () {
    moveButton();
    keepScore();
    updateHighScore();
});

// moving the button to random position
function moveButton() {
    btn.style.left = Math.floor(Math.random() * 600) + "px";
    btn.style.top = Math.floor(Math.random() * 370) + "px";
}

// keeping score 
function keepScore() {
    counter++;
    score.textContent = "Score: " + counter;
}

// updating high score
function updateHighScore() {
    localStorage.setItem("high-score", counter);
    highScore.textContent = "Highest score: " + localStorage.getItem("high-score") + 1; 
}
