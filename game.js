var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Player 1 Paddle
var player1 = new GameObject();
player1.x = 10;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";
player1.speed = 5;

// Player 2 Paddle
var player2 = new GameObject();
player2.x = canvas.width - 30;
player2.y = canvas.height / 2 - 50;
player2.width = 20;
player2.height = 100;
player2.color = "green";
player2.speed = 5;

// Ball
var ball = new Ball();

// Reset Game Function
var resetGame = function () {
    player1.y = canvas.height / 2 - player1.height / 2;
    player2.y = canvas.height / 2 - player2.height / 2;

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

    // Draw everything
    player1.drawRect();
    player2.drawRect();
    ball.draw();
}

// Loop
setInterval(animate, 1000 / 60);