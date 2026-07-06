// storing time in seconds rather than minutes
let totalTime = 25 * 60;
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
    totalTime = 25 * 60;
    updateDisplay();
  }

let startbtn = document.getElementById("start")
let pausebtn = document.getElementById("pause")
let resetbtn = document.getElementById("reset")  

startbtn.addEventListener("click", () => {
    startTimer()
})

pausebtn.addEventListener("click", () => {
    pauseTimer()
})

resetbtn.addEventListener("click", () => {
    resetTimer()
})
updateDisplay();