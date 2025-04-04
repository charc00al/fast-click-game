var btn = document.querySelector(".btn");
var score = document.querySelector(".score");
var counter = 0;

btn.addEventListener("click", function () {
    btn.style.left = Math.floor(Math.random() * 600) + "px";
    btn.style.top = Math.floor(Math.random() * 370) + "px";
    counter++;
    score.textContent = "Score: " + counter;
});

