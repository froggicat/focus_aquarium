let tasks = document.getElementById("tasklist")
let addtaskbtn = document.getElementById("addtask")

function addtask() {
    const taskcontents = prompt("New task: ")
    if (!taskcontents) return;

    const item = document.createElement("li")
    const span = document.createElement("span")
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
