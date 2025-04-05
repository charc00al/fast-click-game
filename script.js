var btn = document.querySelector(".btn");
var scoreText = document.querySelector(".score");
var highScoreText = document.querySelector(".highest-score")

var score = 0;
var highScore = 0;

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
    score++;
    scoreText.textContent = "Score: " + score;
}

// updating high score
function updateHighScore() {

    localStorage.setItem("high-score", score);
    highScoreText.textContent = "Highest score: " + localStorage.getItem("high-score") + 1; 
}
