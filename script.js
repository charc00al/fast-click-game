// DOM selectors
const btn = document.querySelector(".btn");
const scoreText = document.querySelector(".score");
const highScoreText = document.querySelector(".highest-score")
const timerText = document.querySelector(".timer")
const startBtn = document.querySelector(".start-btn")



startBtn.addEventListener("click", function(){
    startTimer();

})


function startTimer() {
    let seconds = 5;


    function tickingSeconds() {
        currentTime = seconds--;
        timerText.textContent = "Time remaining: " + currentTime + " seconds";

        if (seconds == -1) {
            clearInterval(timer);
        }
    }

    const timer = setInterval(tickingSeconds, 1000);

}