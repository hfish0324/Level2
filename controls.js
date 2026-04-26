// Control fuctions
var wPressed = false;
var sPressed = false;

document.addEventListener("keydown", function(e) {
    if (e.key === "w") wPressed = true;
    if (e.key === "s") sPressed = true;
});

document.addEventListener("keyup", function(e) {
    if (e.key === "w") wPressed = false;
    if (e.key === "s") sPressed = false;
});