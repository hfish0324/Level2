// Global Image Variable
var img = new Image();
img.src = "images/flair-ball.png";

// Ball Class
function Ball() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.size = 20;
    this.vx = -4;
    this.vy = 0;
}

// Draw Ball
Ball.prototype.draw = function () {
    if (img) {
        ctx.drawImage(
            img,
            this.x - this.size,
            this.y - this.size,
            this.size * 2,
            this.size * 2
        );
    }
};

// Movement
Ball.prototype.move = function () {

    this.x += this.vx;
    this.y += this.vy;

    // Top / bottom walls
    if (this.y - this.size < 0) {
        this.y = this.size;
        this.vy *= -1;
    }

    if (this.y + this.size > canvas.height) {
        this.y = canvas.height - this.size;
        this.vy *= -1;
    }

    // Player 1 collision
    if (
        this.x - this.size < player1.x + player1.width &&
        this.x > player1.x &&
        this.y > player1.y &&
        this.y < player1.y + player1.height
    ) {
        this.x = player1.x + player1.width + this.size;
        this.vx = Math.abs(this.vx);

        var hitPos = (this.y - player1.y) / player1.height;
        this.vy = (hitPos - 0.5) * 10;
    }

    // Player 2 collision
    if (
        this.x + this.size > player2.x &&
        this.x < player2.x + player2.width &&
        this.y > player2.y &&
        this.y < player2.y + player2.height
    ) {
        this.x = player2.x - this.size;
        this.vx = -Math.abs(this.vx);

        var hitPos = (this.y - player2.y) / player2.height;
        this.vy = (hitPos - 0.5) * 10;
    }

    // Scoring
    if (this.x < 0) {
        p2Wins++;
        resetGame();
    }

    if (this.x > canvas.width) {
        p1Wins++;
        resetGame();
    }
};