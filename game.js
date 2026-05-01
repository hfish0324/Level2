var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Scores
var p1Wins = 0;
var p2Wins = 0;

// Player 1 Paddle
var player1 = new GameObject();
player1.x = 10;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "red";
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

// Reset Game
var resetGame = function () {
    player1.y = canvas.height / 2 - 50;
    player2.y = canvas.height / 2 - 50;

    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;

    ball.vx = -4;
    ball.vy = 0;
};

// Ball Logic
Ball.prototype.move = function () {

    this.x += this.vx;
    this.y += this.vy;

    // Top / Bottom wall Bounce
    if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
        this.vy *= -1;
    }

    // Player 1 Paddle
    if (
        this.x - this.size < player1.x + player1.width &&
        this.x > player1.x &&
        this.y > player1.y &&
        this.y < player1.y + player1.height
    ) {
        var hitPos = (this.y - player1.y) / player1.height;

        this.vx = Math.abs(this.vx); // always send right

        if (hitPos < 0.33) {
            this.vy = -4;
        } else if (hitPos < 0.66) {
            this.vy = 0;
        } else {
            this.vy = 4;
        }

        this.x = player1.x + player1.width + this.size;
    }

    // Player 2 Paddle
    if (
        this.x + this.size > player2.x &&
        this.x < player2.x + player2.width &&
        this.y > player2.y &&
        this.y < player2.y + player2.height
    ) {
        var hitPos = (this.y - player2.y) / player2.height;

        this.vx = -Math.abs(this.vx); // always send left

        if (hitPos < 0.33) {
            this.vy = -4;
        } else if (hitPos < 0.66) {
            this.vy = 0;
        } else {
            this.vy = 4;
        }

        this.x = player2.x - this.size;
    }

    // Score
    if (this.x < 0) {
        p2Wins++;
        resetGame();
    }

    if (this.x > canvas.width) {
        p1Wins++;
        resetGame();
    }
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

// Run game
setInterval(animate, 1000 / 60);