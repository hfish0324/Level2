// Canvas setup
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create player paddle
var player1 = new GameObject();
player1.x = 10;              // left side of canvas
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";

// Animate function
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player paddle
    player1.drawRect();
}

// Game loop using setInterval
setInterval(animate, 1000 / 60);