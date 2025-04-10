// DOM selectors
const btn = document.querySelector(".btn");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".highest-score")
const timerText = document.querySelector(".timer")
const startBtn = document.querySelector(".start-btn")

let timer = null;

startBtn.addEventListener("click", function(){
    startTimer();
})


function startTimer() {
    if (timer) {
        clearInterval(timer);
    }

    let seconds = 10;

    timer = setInterval(tickingSeconds, 1000);
    function tickingSeconds() {
        currentTime = seconds--;
        timerText.textContent = "Time remaining: " + currentTime + " seconds";

        if (seconds == -1) {
            clearInterval(timer);
        }
    }
}