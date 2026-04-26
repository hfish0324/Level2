function Ball() {
    this.x = 400;
    this.y = 250;
    this.size = 20;
    this.color = "red";

    this.vx = 4;
    this.vy = 4;

    // Draw ball
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    // Move + collisions
    this.move = function () {
        this.x += this.vx;
        this.y += this.vy;

        // Top & Bottom Walls
        if (this.y - this.size < 0 || this.y + this.size > canvas.height) {
            this.vy *= -1;
        }

        // Right Wall
        if (this.x + this.size > canvas.width) {
            this.vx *= -1;
        }

        // Left Wall
        if (this.x - this.size < 0) {
            this.vx *= -1;
        }

        // paddle collision (player1)
        if (
            this.x - this.size < player1.x + player1.width &&
            this.x + this.size > player1.x &&
            this.y > player1.y &&
            this.y < player1.y + player1.height
        ) {
            this.vx *= -1;

            // push ball out so it doesn't get stuck
            this.x = player1.x + player1.width + this.size;
        }
    };
}