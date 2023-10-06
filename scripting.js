const player = document.getElementById("player");
const obs = document.getElementById("obstacle");
const jumpbtn = document.getElementById("jumpbtn");

function jump() {
    player.classList.add("jump");

    setTimeout(function () {
        player.classList.remove("jump");
    }, 750);
}

jumpbtn.addEventListener("click", jump);
