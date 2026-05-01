var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Scores
var p1Wins = 0;
var p2Wins = 0;

// Player 1
var player1 = new GameObject();
player1.x = 10;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "red";
player1.speed = 5;

// Player 2
var player2 = new GameObject();
player2.x = canvas.width - 30;
player2.y = canvas.height / 2 - 50;
player2.width = 20;
player2.height = 100;
player2.color = "green";
player2.speed = 5;

// Ball
var ball = new Ball();

// Reset Game
var resetGame = function () {
    player1.y = canvas.height / 2 - 50;
    player2.y = canvas.height / 2 - 50;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.vx = -4;
    ball.vy = 0;
};

// Game Loop
function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Player 1 movement
    if (wPressed) player1.y -= player1.speed;
    if (sPressed) player1.y += player1.speed;

    // Player 2 movement
    if (upPressed) player2.y -= player2.speed;
    if (downPressed) player2.y += player2.speed;

    // Clamp Player 1
    if (player1.y < 0) player1.y = 0;
    if (player1.y + player1.height > canvas.height) {
        player1.y = canvas.height - player1.height;
    }

    // Clamp Player 2
    if (player2.y < 0) player2.y = 0;
    if (player2.y + player2.height > canvas.height) {
        player2.y = canvas.height - player2.height;
    }

    // Update ball
    ball.move();

    // Draw objects
    player1.drawRect();
    player2.drawRect();
    ball.draw();

    // Scoreboard
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    ctx.font = "24px Courier New";
    ctx.fillText("Player 1 | Player 2", canvas.width / 2, 25);

    ctx.font = "22px Courier New";
    ctx.fillText(p1Wins + " - " + p2Wins, canvas.width / 2, 50);
}

// Start loop
setInterval(animate, 1000 / 60);