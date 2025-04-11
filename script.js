// DOM selectors
const btn = document.querySelector(".btn");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".high-score")
const timerText = document.querySelector(".timer")
const startBtn = document.querySelector(".start-btn")

let timer = null;

let highScore = localStorage.getItem("hs");

// START GAME
startBtn.addEventListener("click", function(){
    // start Timer
    startTimer();
    // reset and show score
    score = 0;
    scoreText.textContent = "Score: " + score;
    // listen to make button move and count score
    btn.addEventListener("click", moveButton);
    btn.addEventListener("click", updateHighScore);
})

// BUTTON MOVEMENT & SCORE
function moveButton() {
    // button movement
    btn.style.left = Math.floor(Math.random() * 600) + "px";
    btn.style.top = Math.floor(Math.random() * 370) + "px";
    // adding score
    score++;
    scoreText.textContent = "Score: " + score;
}

// KEEP HIGH SCORE
function updateHighScore() {
    if (score > highScore) {
        highScore = score
    };
    localStorage.setItem("hs", highScore);
    highScoreText.textContent = "Highest score: " + highScore;
}

highScoreText.textContent = "Highest score: " + localStorage.getItem("hs");

// TIMER 
function startTimer() {
    if (timer) {
            clearInterval(timer); 
        }
    timer = setInterval(tickingSeconds, 1000);
    let seconds = 15;
    function tickingSeconds() {
        currentTime = seconds--;
        timerText.textContent = "Time remaining: " + currentTime + " seconds";
        if (seconds == -2) {
            clearInterval(timer); 
            timerText.textContent = "Time remaining: 0 seconds";
            gameOver();
        }
    } 
}

// GAME OVER 
function gameOver() {
    alert("Game Over");
    btn.removeEventListener("click", moveButton);
}