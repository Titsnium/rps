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

// The scores
window.playerScore = 0;
window.computerScore = 0;

// The main game function
function game() {
    // The choices for the computer 
    var computerMoves = ["Rock", "Paper", "Scissors"];
    // Picks a random option from the array above
    var computerMove = computerMoves[Math.floor(Math.random()*computerMoves.length)];
    

    if (
    playerMove == "Rock" && computerMove == "Paper" || 
    playerMove == "Paper" && computerMove == "Scissors" || 
    playerMove == "Scissors" && computerMove == "Rock"
    ) {
        console.log("YOU WIN!!!");
        window.playerScore += 1;
    } 
    
    else if (
    computerMove == "Rock" && playerMove == "Paper" ||
    computerMove == "Paper" && playerMove == "Scissors" || 
    computerMove == "Scissors" && playerMove == "Rock") {
        console.log("YOU LOSE!!!");
        window.computerScore += 1 ;
    } 
    
    else if (playerMove == computerMove) {
        console.log("DRAW!!!");
    }
    // Displays the current scores on the html page
    document.getElementById("playerScore").innerHTML = "PLAYER: " + window.playerScore;
    document.getElementById("computerScore").innerHTML = "COMPUTER: " + window.computerScore;

    // Checks to see if the game is basically finished and displays the result on the html page
    if (window.playerScore >= 5) {
        document.getElementById("resultText").innerHTML = "You WIN!";
        playerScore = 0;
        computerScore = 0;
    } else if (window.computerScore >= 5) {
        document.getElementById("resultText").innerHTML = "You LOSE!";
        playerScore = 0;
        computerScore = 0;
    } else {
        document.getElementById("resultText").innerHTML = "GAME!";
    }
}