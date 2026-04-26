function GameObject() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.color = "white";

    // Draw Circle
    this.drawCircle = function () {
        ctx.beginPath();
        ctx.arc(
            this.x,
            this.y,
            this.width / 2,
            0,
            Math.PI * 2
        );
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    };

    // Draw Rectangle (for paddle)
    this.drawRect = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}