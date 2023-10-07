const player = document.getElementById("beaver");
const obstacle = document.getElementById("obstacle");
const jumpbtn = document.getElementById("jumpbtn");
const duckbtn = document.getElementById("duckbtn");
const scorecount = document.getElementById("score");
var score = 0;

function initiate() {
    timer = setInterval(updateScore, 10);
    updateScore();

    ambience = new Audio("res/river-amb.mp3");
    ambience.loop = true;
    ambience.play();

    ducked = true;
    
}

function updateScore() {
    score = score + 0.01;
    console.log(parseFloat(score).toFixed(2));
    scorecount.innerHTML = "Score: " + parseFloat(score).toFixed(2);
  }

isAlive = setInterval(function () {
    setTimeout(function () {
        obstacle.classList.add("moving");
        obstacle.style.opacity = 1;

        // Beaver Y-pos
    let beaverTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    // Obstacle X-pos
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(obstacleLeft < 0 || obstacleLeft > 1170)
    {
        obstacle.style.opacity = 0;
    }
    else {
        obstacle.style.opacity = 1;
    }

    // Compare positions for collision
    if (obstacleLeft < 200 && beaverTop >=200) {
        //collision
        alert("Game Over! \nScore: " + score.toFixed(2))
        window.location.href = "index.html";
    }
        
    }, 1500);

}, 10);

function jump() {
    if (player.classList.contains("jump")) {
        return;
    }
    player.classList.add("jump");
    audio = new Audio('res/jumpsfx.mp3');
    audio.volume = 0.025;
    audio.play();

    setTimeout(function () {
        player.classList.remove("jump");
    }, 750);
}

function duck() {
    if (ducked) {
        player.style.height = "175px";
        player.style.backgroundSize = "200px 175px"
        player.style.top = "225px"

        obstacle.style.top = "110px"
    }
    else {
        player.style.height = "50px";
        player.style.backgroundSize = "200px 50px"
        player.style.top = "315px"

        obstacle.style.top = "235px"
    }
}

jumpbtn.addEventListener("click", () => {
    if (ducked) {
        jump();
    }
});
duckbtn.addEventListener("click", () => {
    if (ducked) {
        ducked = false;
        duck();
        duckbtn.innerHTML = "Unduck!"
    }
    else {
        ducked = true;
        duck();
        duckbtn.innerHTML = "Duck!"
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp" || e.key === "w") {
        if (ducked) {
            jump();
        }
    }
    else if (e.key === "ArrowDown" || e.key === "s") {
        ducked = false;
        duck();
    }
});

document.addEventListener("keyup", (e) => {
    ducked = true;
    duck();
});


