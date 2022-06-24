function computerPlay() {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber == 0) {
    return "Rock";
  } else if (randomNumber == 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let playerChoice =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  let winMessage = `You win! ${playerChoice} beats ${computerSelection}!`;
  let loseMessage = `You lose! ${computerSelection} beats ${playerChoice}!`;
  let drawMessage = `It's a draw!`;

  switch (playerChoice) {
    case "Rock":
      if (computerSelection == "Scissors") {
        console.log(winMessage);
        return 1;
      } else if (computerSelection == "Paper") {
        console.log(loseMessage);
        return -1;
      }
      console.log(drawMessage);
      return 0;

    case "Paper":
      if (computerSelection == "Rock") {
        console.log(winMessage);
        return 1;
      } else if (computerSelection == "Scissors") {
        console.log(loseMessage);
        return -1;
      }
      console.log(drawMessage);
      return 0;

    case "Scissors":
      if (computerSelection == "Paper") {
        console.log(winMessage);
        return 1;
      } else if (computerSelection == "Rock") {
        console.log(loseMessage);
        return -1;
      }
      console.log(drawMessage);
      return 0;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Make your decision:",
      "Rock, paper or scissors"
    );
    let computerSelection = computerPlay();

    let result = playRound(playerSelection, computerSelection);

    switch (result) {
      case 1:
        playerScore++;
        break;
      case -1:
        computerScore++;
        break;
      default:
        break;
    }

    console.log(
      `Current score:\n Player: ${playerScore} | Computer: ${computerScore}`
    );
  }

  let finalResult =
    playerScore > computerScore
      ? "Congratulations! You win!"
      : playerScore < computerScore
      ? "Sorry, you lost!"
      : "It's a draw!";

  console.log(
    `Final score:\n Player: ${playerScore} | Computer: ${computerScore}\n ${finalResult}`
  );
}

game();
