const player = document.getElementById("player");
const obs = document.getElementById("obstacle");
const jumpbtn = document.getElementById("jumpbtn");
const duckbtn = document.getElementById("duckbtn");

function initiate() {
    ducked = false;
    ambience = new Audio("res/river-amb.mp3");
    ambience.loop = true;
    ambience.play();
}

function jump() {
    if (player.classList.contains("jump")) {
        console.log("no more beavers jumping on the bed!");
        return;
    }
    player.classList.add("jump");
    console.log("jumping")
    audio = new Audio('res/jumpsfx.mp3');
    audio.volume = 0.05;
    audio.play();

    setTimeout(function () {
        player.classList.remove("jump");
    }, 600);
}

function duck() {
    if (ducked)
    {
    player.style.height = "175px";
    player.style.backgroundSize= "200px 175px"
    player.style.top= "250px"
    }
    else {
        player.style.height = "50px";
        player.style.backgroundSize= "200px 50px"
        player.style.top= "340px"
    }
}

jumpbtn.addEventListener("click", jump);
duckbtn.addEventListener("click", ()=> {
    if (ducked) {
        ducked = false;
        duck();
        duckbtn.innerHTML = "Unduck!"
        console.log("Ducking");
    }
    else {
        ducked = true;
        duck();
        duckbtn.innerHTML = "Duck!"
        console.log("Not Ducking");
    }
})

document.addEventListener("keydown", (e)=> {
    if (e.key === "ArrowUp"){
        jump();
    }
    else if (e.key === "ArrowDown"){
        ducked = false;
        duck();
    }
});

document.addEventListener("keyup", (e)=> {
    ducked = true;
    duck();
});


