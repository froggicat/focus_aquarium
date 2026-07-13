let tasks = document.getElementById("tasklist")
let addtaskbtn = document.getElementById("addtask")

let music = [
    "music/song1.mp3",
    "music/song2.mp3",
    "music/song3.mp3",
    "music/song4.mp3",
    "music/song5.mp3",
    "music/song6.mp3",
    "music/song7.mp3",
]
let audio = document.getElementById("music")
let currentTrack = 0
let playbtn = document.getElementById("playbtn")
let pausebtn = document.getElementById("pausebtn")
let skipbtn = document.getElementById("skipbtn")

audio.src = music[currentTrack]
audio.addEventListener("ended", () => {
    currentTrack = (currentTrack + 1) % music.length;
    audio.src = music[currentTrack];
    audio.play();
})

audio.volume = 0.4;
playbtn.addEventListener("click", () => {
    audio.play()
})

pausebtn.addEventListener("click", () => {
    audio.pause()
})

skipbtn.addEventListener("click", () => {
    currentTrack = (currentTrack + 1) % music.length
    audio.src = music[currentTrack]
    audio.play()
})

function addtask() {
    const taskcontents = prompt("New task: ")
    if (!taskcontents) return;

    const item = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("task-text")
    span.textContent = taskcontents

    const btndiv = document.createElement("span")
    btndiv.classList.add("task-buttons")

    const editbtn = document.createElement("button")
    editbtn.textContent = "edit";

    editbtn.addEventListener("click", () => {
        const newtext = prompt("Edit task: ", span.textContent)
        if (newtext) {
            span.textContent = newtext;
        }
    })

    const deletebtn = document.createElement("button")
    deletebtn.textContent = "x"

    deletebtn.addEventListener("click", () => {
        item.remove()
    })

    btndiv.appendChild(editbtn)
    btndiv.appendChild(deletebtn)

    item.appendChild(span)
    item.appendChild(btndiv)

    tasks.appendChild(item)
}

addtaskbtn.addEventListener("click", () => {
    addtask();
})
