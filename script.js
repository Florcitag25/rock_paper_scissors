const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");

btnRock.addEventListener("click", () => playRound("Rock", getComputerChoice()));
btnPaper.addEventListener("click", () =>
  playRound("Paper", getComputerChoice())
);
btnScissors.addEventListener("click", () =>
  playRound("Scissors", getComputerChoice())
);

function playRound(userSelection, computerSelection) {
  /*   let firstLetterUser = userSelection.slice(0, 1).toUpperCase();
  let restOfLetters = userSelection
    .slice(1, userSelection.length)
    .toLowerCase();
  let userSelection2 = firstLetterUser + restOfLetters; */
  let result = "";
  if (userSelection === computerSelection) {
    result = "Tie! Try again.";
  } else if (userSelection == "Rock" && computerSelection == "Paper") {
    result = "Paper beats Rock! You lose!";
  } else if (userSelection == "Rock" && computerSelection == "Scissors") {
    result = "Rock beats Scissors! You Win!";
  } else if (userSelection == "Paper" && computerSelection == "Rock") {
    result = "Paper beats Rock! You Win!";
  } else if (userSelection == "Paper" && computerSelection == "Scissors") {
    result = "Scissors beats Paper! You lose!";
  } else if (userSelection == "Scissors" && computerSelection == "Rock") {
    result = "Rock beats Scissors! You lose!";
  } else {
    result = "Scissors beats Paper! You Win!";
  }

  const newDiv = document.querySelector(".Result");

  const playerSelection = document.createElement("p");
  playerSelection.textContent = "Your Selection: " + userSelection;
  const machineSelection = document.createElement("p");
  machineSelection.textContent = "Computer's Selection: " + computerSelection;
  const roundResult = document.createElement("p");
  roundResult.textContent = "Result: " + result;

  newDiv.appendChild(playerSelection);
  newDiv.appendChild(machineSelection);
  newDiv.appendChild(roundResult);

  return result;
}

function getComputerChoice() {
  const choiceOptions = ["Rock", "Paper", "Scissors"];
  let numberChosen = Math.floor(Math.random() * choiceOptions.length);
  return choiceOptions[numberChosen];
}

/* function playGame() {
  let userCount = 0;
  let computerCount = 0;
  let finalResult;

  for (i = 0; i <= 4; i++) {
    let computerSelection = getComputerChoice();
    let userSelection = prompt("Choose!");
    let roundResult = playRound(userSelection, computerSelection);
    console.log("Computer selection: " + computerSelection);
    console.log("User selection: " + userSelection);
    console.log("Result of the round: "+playRound(userSelection, computerSelection));
    if (roundResult.includes("lose")) {
      computerCount++;
    } else if (roundResult.includes("Win")) {
      userCount++;
    } else {
      userCount = userCount;
      computerCount = computerCount;
    }
  }
  if (userCount > computerCount) {
    finalResult = "YOU WIN!";
  } else if (userCount < computerCount) {
    finalResult = "YOU LOSE!";
  } else {
    finalResult = "TIE";
  }

  console.log(finalResult + "--> Your score: "+userCount+" Computer score: "+ computerCount);
}

playGame(); */
