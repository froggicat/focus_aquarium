const fishImages = [
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

const fishCounter = document.getElementById("fishCounter");
let totalFish = 0;

function swim_fish(fish, x, aquarium) {
    let direction = 1 
    let speed = 1 + Math.random() * 2

    setInterval(() => {
        x += speed * direction

        // if it hits the right wall
        if (x >= aquarium.clientWidth - fish.offsetWidth) {
            direction = -1;
            fish.style.transform = "scaleX(-1)"
        }

        // if it hits the left wall
        if (x <= 0) {
            direction = 1;
            fish.style.transform = "scaleX(1)"
        }

        fish.style.left = x + "px"
    }, 20)
}

export default function spawn_fish() {
    console.log("spawnFish running");

    const aquarium = document.querySelector(".aquarium")
    let index = Math.floor(Math.random() * fishImages.length);

    const fish = document.createElement("img");

    console.log(index);
    console.log(fishImages[index]);

    fish.src = `${fishImages[index]}`;
    fish.className = "fish";

    const sandHeight = 100 

    let fishX = Math.floor((Math.random() * 550))
    let fishY = Math.floor(
        Math.random() * (400 - sandHeight)
    )

    fish.style.left = fishX + "px";
    fish.style.top = fishY + "px";

    aquarium.appendChild(fish);

    totalFish += 1
    fishCounter.textContent = `Total Fish: ${totalFish}`

    swim_fish(fish, fishX, aquarium)
}