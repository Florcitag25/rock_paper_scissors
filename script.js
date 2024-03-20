function playRound(userSelection, computerSelection) {
  let firstLetterUser = userSelection.slice(0, 1).toUpperCase();
  let restOfLetters = userSelection
    .slice(1, userSelection.length)
    .toLowerCase();
  let userSelection2 = firstLetterUser + restOfLetters;
  let result = "";
  if (userSelection2 === computerSelection) {
    result = "Tie! Try again.";
  } else if (userSelection2 == "Rock" && computerSelection == "Paper") {
    result = "Paper beats Rock! You lose!";
  } else if (userSelection2 == "Rock" && computerSelection == "Scissors") {
    result = "Rock beats Scissors! You Win!";
  } else if (userSelection2 == "Paper" && computerSelection == "Rock") {
    result = "Paper beats Rock! You Win!";
  } else if (userSelection2 == "Paper" && computerSelection == "Scissors") {
    result = "Scissors beats Paper! You lose!";
  } else if (userSelection2 == "Scissors" && computerSelection == "Rock") {
    result = "Rock beats Scissors! You lose!";
  } else {
    result = "Scissors beats Paper! You Win!";
  }

  return result;
}

function getComputerChoice() {
  const choiceOptions = ["Rock", "Paper", "Scissors"];
  let numberChosen = Math.floor(Math.random() * choiceOptions.length);
  return choiceOptions[numberChosen];
}

function playGame() {
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

playGame();
