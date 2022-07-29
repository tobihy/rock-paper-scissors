const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  console.log(button.id);
  button.addEventListener("click", playRound);
});

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

function setResultMessage(message) {
  let resultMessage = document.querySelector("#resultMessage");
  resultMessage.textContent = message;
}

function playRound(event) {
  let playerSelection = event.target.id;
  let playerChoice =
    playerSelection.slice(0, 1).toUpperCase() +
    playerSelection.slice(1).toLowerCase();

  let computerSelection = computerPlay();

  let winMessage = `You win! ${playerChoice} beats ${computerSelection}!`;
  let loseMessage = `You lose! ${computerSelection} beats ${playerChoice}!`;
  let drawMessage = `It's a draw!`;

  switch (playerChoice) {
    case "Rock":
      if (computerSelection == "Scissors") {
        setResultMessage(winMessage);
        updateScores(1);
      } else if (computerSelection == "Paper") {
        setResultMessage(loseMessage);
        updateScores(-1);
      } else {
        setResultMessage(drawMessage);
        updateScores(0);
      }
      break;

    case "Paper":
      if (computerSelection == "Rock") {
        setResultMessage(winMessage);
        updateScores(1);
      } else if (computerSelection == "Scissors") {
        setResultMessage(loseMessage);
        updateScores(-1);
      } else {
        setResultMessage(drawMessage);
        updateScores(0);
      }
      break;

    case "Scissors":
      if (computerSelection == "Paper") {
        setResultMessage(winMessage);
        updateScores(1);
      } else if (computerSelection == "Rock") {
        setResultMessage(loseMessage);
        updateScores(-1);
      } else {
        setResultMessage(drawMessage);
        updateScores(0);
      }
      break;
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScores(result) {
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

  let resultMessage = document.querySelector("#resultMessage");
  let currentScore = document.querySelector("#currentScore");

  if (playerScore == 5) {
    resultMessage.textContent = "Congratulations! You win!";
    currentScore.textContent = `Final score:\n Player: ${playerScore} | Computer: ${computerScore}`;
    cleanUp();
  } else if (computerScore == 5) {
    resultMessage.textContent = "Sorry, you lost!";
    currentScore.textContent = `Final score:\n Player: ${playerScore} | Computer: ${computerScore}`;
    cleanUp();
  } else {
    currentScore.textContent = `Current score:\n Player: ${playerScore} | Computer: ${computerScore}`;
  }
}

function cleanUp() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => button.removeEventListener("click", playRound));
  buttons.forEach((button) => (button.disabled = true));
}
