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

        // Top & Bottom Wall (bounce)
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
            this.vy *= -1;
        }

        // right wall (bounce)
        if (this.x + this.size > canvas.width) {
            this.vx *= -1;
        }

        // 3 zone paddle collision
        if (
            this.x - this.size < player1.x + player1.width &&
            this.x + this.size > player1.x &&
            this.y > player1.y &&
            this.y < player1.y + player1.height
        ) {
            var hitPos = this.y - player1.y;
            var third = player1.height / 3;

            // top third = up-left
            if (hitPos < third) {
                this.vx = 4;
                this.vy = -4;
            }
            // Middle third = straight bounce
            else if (hitPos < third * 2) {
                this.vx *= -1;
                this.vy = 0;
            }
            // Bottom third = down-left
            else {
                this.vx = 4;
                this.vy = 4;
            }

            this.x = player1.x + player1.width + this.size;
        }

        // left side = You lose
        if (this.x + this.size < 0) {
            resetGame();
        }
    };
}