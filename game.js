var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Paddle
var player1 = new GameObject();
player1.x = 10;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";
player1.speed = 5;

// Ball
var ball = new Ball();

// Reset Game Function
var resetGame = function () {
    player1.y = canvas.height / 2 - player1.height / 2;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.vx = 4 * (Math.random() > 0.5 ? 1 : -1);
    ball.vy = 4;
};

// Game Loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Paddle movement
    if (wPressed) player1.y -= player1.speed;
    if (sPressed) player1.y += player1.speed;

    // Clamp paddle
    if (player1.y < 0) player1.y = 0;
    if (player1.y + player1.height > canvas.height) {
        player1.y = canvas.height - player1.height;
    }

    // Update ball
    ball.move();

    // Draw everything
    player1.drawRect();
    ball.draw();
}

// Loop
setInterval(animate, 1000 / 60);