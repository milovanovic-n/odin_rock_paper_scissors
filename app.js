/* Select <span> to display the result */
const dispalyPlayerScore = document.querySelector("#player");
const displayComputerScore = document.querySelector("#computer");
/* Select P element to show text */
const displayText = document.querySelector("#displayText");

/* Create a variable to check is the game over */
let gameOver = false;

/* Set Score to 0 at the start of the game*/
let playerScore = 0;
let computerScore = 0;

/* Select Reset button */
const btnReset = document.querySelector("#btnReset");

/* If the game is over, disable all buttons and ask user to play again */
const endGame = () => {
    if(gameOver) {
        /* Ask user to play again */
        btnReset.classList.replace("optionHidden", "option");

        /* Disable all buttons */
        const btns = document.querySelectorAll("button");
        btnsArr= Array.prototype.slice.call(btns);
        btnsArr.forEach(btn => {
            btn.classList.replace("option", "optionDisabled");
        });
    }
}

/* Reset Game Function */
const resetGame = () => {
    /* switch gameOver variable to false */
    gameOver = false;

    /* reset scores */
    playerScore = 0;
    computerScore = 0;
    dispalyPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;

    /* Remove Display Text */
    displayText.textContent = "";

    /* Hide Reset Button */
    btnReset.classList.replace("option", "optionHidden");

    /* Enable all buttons */
    const btns = document.querySelectorAll("button");
    btnsArr= Array.prototype.slice.call(btns);
    btnsArr.forEach(btn => {
        btn.classList.replace("optionDisabled", "option");
    });
};

btnReset.addEventListener("click", resetGame);

/* Function that randlomy return Rock, Paper or Scissors */
const computerPlay = () => {
    /* variable that keeps 3 posible options */
    const options = ["rock", "paper", "scissors"];
    /* Functions that return random number 0, 1 or 2 */
    const randomNumber = () => Math.floor(Math.random() * 3);
    /* call function randomNumber and store the result in a variable */
    const myResult = randomNumber();
    /* retun one option */
    return options[myResult];
};

/* Function that comapres player`s and computer`s choice */
const compareChoice = (user, computer) => {
    /* Compare player and computer choice */
    if (user === "rock") {
        /* return the result */
        switch(computer) {
            case "rock":
                displayText.textContent = "Tie: Your and Computer`s choice is Rock";
                displayText.style.color = "#f5da13";
                return "tie"
            case "paper":
                displayText.textContent = "You Lose!: Paper beats Rock";
                displayText.style.color = "#ff8baa";
                return "computer";
            case "scissors":
                displayText.textContent = "You win!: Rock beats Scissors";
                displayText.style.color = "#00ADB5";
                return "player";
        }
    } else if (user === "paper") {
        switch(computer) {
            case "rock":
                displayText.textContent = "You win!: Paper beats Rock";
                displayText.style.color = "#00ADB5";
                return "player";
            case "paper":
                displayText.textContent = "Tie: Your and Computer`s choice is Paper";
                displayText.style.color = "#f5da13";
                return "tie";
            case "scissors":
                displayText.textContent = "You Lose!: Scissors beats Paper";
                displayText.style.color = "#ff8baa";
                return "computer";
        }
    } else {
        switch(computer) {
            case "rock":
                displayText.textContent = "You Lose!: Rock beats Scissors";
                displayText.style.color = "#ff8baa";
                return "computer";
            case "paper":
                displayText.textContent = "You Win!: Scissors beat Paper";
                displayText.style.color = "#00ADB5";
                return "player";
            case "scissors":
                displayText.textContent = "Tie: Your and Computer`s choice is Scissors";
                displayText.style.color = "#f5da13";
                return "tie";
        }
    }
};

/* Function to play one round */
const playRound = (playerSelection = "rock") => {
    /* If the game is over disable this function */

    /* Check input, if not one of the valid options return from the function */
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Please enter a valid input";
    }

    const computerSelection = computerPlay();

    const whoIsTheWinner = compareChoice(playerSelection, computerSelection);

    /* check for the winner of the round - display result */
    if(whoIsTheWinner === "player") {
        playerScore += 1;
        dispalyPlayerScore.textContent = playerScore;
        if(playerScore === 5) {
            gameOver = true;
            endGame();
            displayText.textContent = "You Are The Winner";
        }
    } else if(whoIsTheWinner === "computer") {
        computerScore += 1;
        displayComputerScore.textContent = computerScore;
        if(computerScore === 5) {
            gameOver = true;
            endGame();
            displayText.textContent = "You Lose, Try Again";
        }
    } else {
        console.log("tie")
    }
};

/* Add Event Listener for Buttons */
const btnRock = document.querySelector("#rock");
btnRock.addEventListener("click", () => {
    playRound("rock");
});

const btnPaper = document.querySelector("#paper");
btnPaper.addEventListener("click", () => {
    playRound("paper");
});

const btnScissors = document.querySelector("#scissors");
btnScissors.addEventListener("click", () => {
    playRound("scissors");
});