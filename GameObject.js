function GameObject() {
    this.x = 0;
    this.y = 0;
    this.width = 50;
    this.height = 50;
    this.color = "white";

    this.drawRect = function () {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
}