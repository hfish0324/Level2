var wPressed = false;
var sPressed = false;
var upPressed = false;
var downPressed = false;

document.addEventListener("keydown", function (e) {
    if (e.key === "w") wPressed = true;
    if (e.key === "s") sPressed = true;
    if (e.key === "ArrowUp") upPressed = true;
    if (e.key === "ArrowDown") downPressed = true;
});

document.addEventListener("keyup", function (e) {
    if (e.key === "w") wPressed = false;
    if (e.key === "s") sPressed = false;
    if (e.key === "ArrowUp") upPressed = false;
    if (e.key === "ArrowDown") downPressed = false;
});