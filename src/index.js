// Checks to see if any of these buttons were clicked, and sets the playerMove variable accordingly
document.getElementById("Rock").onclick = function() {
    window.playerMove = "Rock";
    game();
}

document.getElementById("Paper").onclick = function() {
    window.playerMove = "Paper";
    game();
}

document.getElementById("Scissors").onclick = function() {
    window.playerMove = "Scissors";
    game();
}

// The main game function
function game() {
    if (window.playerMove === "Rock") {
        console.log("You played ROCK!!!");
    } else if (window.playerMove === "Paper") {
        console.log("You played Paper!!!");
    } else {
        console.log("You played SCISSORS!!!");
    }
}
