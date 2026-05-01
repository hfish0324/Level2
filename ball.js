function Ball() {
    this.x = 400;
    this.y = 250;
    this.size = 35;
    this.color = "red";

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

        // Top & Bottom Wall Bounce
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
            this.vy *= -1;
        }

        // PLAYER 1 COLLISION
        if (
            this.x - this.size < player1.x + player1.width &&
            this.x + this.size > player1.x &&
            this.y > player1.y &&
            this.y < player1.y + player1.height
        ) {
            var hitPos = this.y - player1.y;
            var third = player1.height / 3;

            // Top third
            if (hitPos < third) {
                this.vx = 4;
                this.vy = -4;
            }
            // Middle third
            else if (hitPos < third * 2) {
                this.vx = 4;
                this.vy = 0;
            }
            // Bottom third
            else {
                this.vx = 4;
                this.vy = 4;
            }

            this.x = player1.x + player1.width + this.size;
        }

        // PLAYER 2 COLLISION
        if (
            this.x + this.size > player2.x &&
            this.x - this.size < player2.x + player2.width &&
            this.y > player2.y &&
            this.y < player2.y + player2.height
        ) {
            var hitPos = this.y - player2.y;
            var third = player2.height / 3;

            // Top third
            if (hitPos < third) {
                this.vx = -4;
                this.vy = -4;
            }
            // Middle third
            else if (hitPos < third * 2) {
                this.vx = -4;
                this.vy = 0;
            }
            // Bottom third
            else {
                this.vx = -4;
                this.vy = 4;
            }

            this.x = player2.x - this.size;
        }

        // Ball leaves left or right side = reset
        if (this.x + this.size < 0 || this.x - this.size > canvas.width) {
            resetGame();
        }
    };
}