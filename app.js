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
                console.log("Tie: Your and Computer`s choice is Rock");
                return "tie"
            case "paper":
                console.log("You Lose!: Paper beats Rock")
                return "computer";
            case "scissors":
                console.log("You win!: Rock beats Scissors")
                return "player";
        }
    } else if (user === "paper") {
        switch(computer) {
            case "rock":
                console.log("You win!: Paper beats Rock")
                return "player";
            case "paper":
                console.log("Tie: Your and Computer`s choice is Paper")
                return "tie";
            case "scissors":
                console.log("You Lose!: Scissors beats Paper")
                return "computer";
        }
    } else {
        switch(computer) {
            case "rock":
                console.log("You Lose!: Rock beats Scissors");
                return "computer";
            case "paper":
                console.log("You Win!: Scissors beat Paper");
                return "player";
            case "scissors":
                console.log("Tie: Your and Computer`s choice is Scissors")
                return "tie";
        }
    }
};

/* Function to play one round */
const playRound = (playerSelection = "rock", computerSelection) => {
    /* Check input, if not one of the valid options return from the function */
    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        return "Please enter a valid input";
    }

    const whoIsTheWinner = compareChoice(playerSelection, computerSelection);

    /* return the winner */
    if(whoIsTheWinner === "player") {
        return "player"
    } else if(whoIsTheWinner === "computer") {
        return "computer";
    } else {
        return "tie"
    }
};

/* Invoke Play Round */
/*console.log(playRound(playerSelection(), computerSelection));*/

const game = () => {
    /* Set scores to 0 */
    let playerScore = 0;
    let computerScore = 0;
    /* Run the loop 5 times */
    for(let i = 0; i < 5; i++) {
        /* Invoke a function that will assign a value to variable computerSelection */
        const computerSelection = computerPlay();
        /* Let a user enter his choice */
        const playerSelection = () => prompt("Please input: Rock, Paper or Scissors").toLowerCase();
        /* Play a single round and store a winner in a variable*/
        const winnerOFTheRound = playRound(playerSelection(), computerSelection);

        /* Increment score of the winner */
        if(winnerOFTheRound === "player") {
            playerScore++;
        } else if(winnerOFTheRound === "computer") {
            computerScore++;
        } else {
            console.log("tie")
        }
        console.log(playerScore, computerScore)
    }

    /* Print who is the winner of the game */
    if(playerScore > computerScore) {
        console.log("You are the winner of the game!!!");
    } else if(computerScore > playerScore) {
        console.log("You lose, try againg!");
    } else {
        console.log("Tie!");
    }
}

game();