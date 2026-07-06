const fish = [
    "images/fish1.svg",
    "images/fish2.svg",
    "images/fish3.svg",
    "images/fish4.svg",
    "images/fish5.svg",
    "images/fish6.svg",
    "images/fish7.svg",
    "images/fish8.svg",
    "images/fish9.svg",
    "images/fish10.svg",
    "images/fish11.svg",
    "images/fish12.svg",
    "images/fish13.svg",
    "images/fish14.svg",
]

const addfishbtn = document.getElementById("addfishbtn")

function spawn_fish(list_of_fish) {
    const aquarium = document.querySelector(".aquarium")
    let index = Math.floor(Math.random() * list_of_fish.length);

    const fish = document.createElement("img");
    fish.src = `${list_of_fish[index]}`;
    fish.className = "fish";

    let fishX = Math.floor((Math.random() * 550))
    let fishY = Math.floor((Math.random() * 400))

    fish.style.left = fishX + "px";
    fish.style.top = fishY + "px";

    aquarium.appendChild(fish);

    console.log("fish added!")
}

addfishbtn.addEventListener("click", () => {
    spawn_fish(fish);
});
