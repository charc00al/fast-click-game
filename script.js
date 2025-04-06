/* 
1 Create a game function -ok
-- high score stays the same all the time -ok

2 Create game start button, that:
-- hides game over (if it's there)
-- resets score 
-- makes the button clicable / appear
-- triggers timer from beggining

3 Create game over function, 
-- that sets if:
    -- the timer is over
-- that triggers
    -- stop timer
    -- game over screen
    -- button is not clickable/dissapears

4 make it prettyyy 
*/

// DOM selectors
const btn = document.querySelector(".btn");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".highest-score")
const timerText = document.querySelector(".timer")
const startBtn = document.querySelector(".start-btn")

let score = 0;
let highScore = 0;

let isPlaying = false;


// Button to start the game
startBtn.addEventListener("click", function () {
    isPlaying = true;
})



// Starting the game function
if (isPlaying == true) {
    gameOn();

}

// Game function
function gameOn() {
    var seconds = 30;

    // Green circle movement & score keeping
    btn.addEventListener("click", function () {
        //  move button, keep & update score
        moveButton();
        keepScore();
        updateHighScore();
    });
}



// 30 second timer
const timer = setInterval(tickingSeconds, 1000);

function tickingSeconds() {
    currentTime = seconds--;
    timerText.textContent = "Time remaining: " + currentTime + " seconds";

    if (seconds == -1) {
        clearInterval(timer);
    }
}

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

