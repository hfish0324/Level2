function GameObject() {
    this.x = 0;
    this.y = 0;
    this.width = 20;
    this.height = 20;
    this.color = "black";
    this.speed = 0;
}

GameObject.prototype.drawRect = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
};