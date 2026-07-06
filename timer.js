import spawn_fish from "./fish.js";

let session = prompt("How long do you want your focus session in minutes?")

// storing time in seconds rather than minutes
let totalTime = session * 60;
let timer = null;

function updateDisplay() {
    let minutes = Math.floor(totalTime / 60);
    let seconds = Math.floor(totalTime % 60);

    document.getElementById("display").textContent = `${minutes} : ${seconds.toString().padStart(2, "0")}`
}

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        totalTime--;
        updateDisplay();
        if (totalTime <= 0) {
            clearInterval(timer)
            timer = null;
            alert("Pomodoro complete - random fish time!")
            spawn_fish();
        }
    }, 1000)
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    totalTime = session * 60;
    updateDisplay();
  }

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();