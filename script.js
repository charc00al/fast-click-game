// define html elements for manipulation & variables
var btn = document.querySelector(".btn");
var scoreText = document.querySelector(".score");
var highScoreText = document.querySelector(".highest-score")
var timerText = document.querySelector(".timer")

var score = 0;
var highScore = 0;
var seconds = 30;

// create a game start function, that starts with first button-click on the circle? 
    // or should it have a game start button? -- i think click on the circle triggers start
// game start triggers countdown 
// after 30s is game over 
    // or change timer with levels?
// what should happen, when the game is over?
    // -- game over message
    // -- play again button?
    // -- reset score?



// 30 second timer
const timer = setInterval(tickingSeconds, 1000);

function tickingSeconds() {
    currentTime = seconds--;
    timerText.textContent = "Time remaining: " + currentTime + " seconds";

    if (seconds == -1) {
        clearInterval(timer);
    }
}


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
    highScore = localStorage.getItem("hs");
    if (score > highScore) {
        highScore = score
    };
    localStorage.setItem("hs", highScore);
    highScoreText.textContent = "Highest score: " + highScore;
}

highScoreText.textContent = "Highest score: " + localStorage.getItem("hs");

