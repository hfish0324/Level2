function Ball() {
    this.x = 400;
    this.y = 250;
    this.size = 35;
    this.color = "blue";

    this.vx = -4;
    this.vy = 0;

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;

        // Top and bottom bounce
        if (this.y < this.size || this.y > canvas.height - this.size) {
            this.vy = -this.vy;
        }

        // Player 1 hit
        if (
            this.x - this.size < player1.x + player1.width &&
            this.y > player1.y &&
            this.y < player1.y + player1.height
        ) {
            this.vx = 4;
        }

        // Player 2 hit
        if (
            this.x + this.size > player2.x &&
            this.y > player2.y &&
            this.y < player2.y + player2.height
        ) {
            this.vx = -4;
        }

        // Left side = Player 2 scores
        if (this.x < 0) {
            p2Wins++;
            resetGame();
        }

        // Right side = Player 1 scores
        if (this.x > canvas.width) {
            p1Wins++;
            resetGame();
        }
    };
}