import spawn_fish from "./fish.js";

let focus = Number(prompt("How long do you want your focus session in minutes?"))
let breaktime = Number(prompt("How long do you want your break to be?"))

if (isNaN(focus) || isNaN(breaktime)) {
    alert("please enter numbers only!")
    throw new Error("invalid timer input")
    
}

let onBreak = false;
let totalSessionTime = focus * 60;
let timer = null;

function updateDisplay() {
    let minutes = Math.floor(totalSessionTime / 60);
    let seconds = Math.floor(totalSessionTime % 60);

    document.getElementById("display").textContent = `${minutes} : ${seconds.toString().padStart(2, "0")}`
}

function startTimer() {
    if (timer) return;
    timer = setInterval(() => {
        totalSessionTime--;
        if (totalSessionTime < 0) {
            totalSessionTime = 0;
        }
        updateDisplay();
        if (totalSessionTime <= 0 && onBreak == false) {
            onBreak = true
            alert("Focus over - break time!")
            totalSessionTime = breaktime * 60 
            updateDisplay()

            clearInterval(timer)
            timer = null;
            spawn_fish();
        } else if (totalSessionTime <= 0 && onBreak == true) {
            onBreak = false
            alert("Break over - focus time!")
            totalSessionTime = focus * 60
            updateDisplay()

            clearInterval(timer)
            timer = null;
            // maybe add a different sprite that appears after a break!
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
    totalSessionTime = focus * 60;
    updateDisplay();
  }

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

updateDisplay();