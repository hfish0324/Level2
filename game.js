// Create canvas 
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Create paddle
var player1 = new GameObject();
player1.x = 10;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";
player1.speed = 5;

// Animate function
function animate() {
    // Clear screen
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Controls (W = up, S = down)
    if (wPressed) {
        player1.y -= player1.speed;
    }

    if (sPressed) {
        player1.y += player1.speed;
    }

    // Keep paddle inside canvas
    if (player1.y < 0) {
        player1.y = 0;
    }

    if (player1.y + player1.height > canvas.height) {
        player1.y = canvas.height - player1.height;
    }

    // Draw paddle
    player1.drawRect();
}

// Game loop
setInterval(animate, 1000 / 60);