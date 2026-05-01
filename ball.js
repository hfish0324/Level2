function Ball() {
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.size = 20;
    this.vx = -4;
    this.vy = 0;
}

Ball.prototype.draw = function () {
    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
};

// 3-zone Bounce + Ricochet
Ball.prototype.move = function () {

    this.x += this.vx;
    this.y += this.vy;

    // Walls
    if (this.y - this.size < 0) {
        this.y = this.size;
        this.vy *= -1;
    }

    if (this.y + this.size > canvas.height) {
        this.y = canvas.height - this.size;
        this.vy *= -1;
    }

    // Player 1
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

    // Player 2
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