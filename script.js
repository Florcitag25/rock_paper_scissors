const btnRock = document.querySelector("#Rock");
const btnPaper = document.querySelector("#Paper");
const btnScissors = document.querySelector("#Scissors");

let userCount = 0;
let computerCount = 0;
let finalResult;
const newDiv = document.querySelector(".Result");

btnRock.addEventListener("click", function(){
  let finalResultRound= playRound("Rock", getComputerChoice());
  if (finalResultRound.includes("lose")) {
    computerCount++;
  } else if (finalResultRound.includes("Win")) {
    userCount++;
  } else {
    userCount = userCount;
    computerCount = computerCount;
  }
  let currentScores = document.createElement ("p");
  currentScores.textContent = "User Score: " + userCount + "  Computer Score: " + computerCount;
  newDiv.appendChild(currentScores);
  endOfGame();
});
btnPaper.addEventListener("click", function(){
  let finalResultRound= playRound("Paper", getComputerChoice());
  if (finalResultRound.includes("lose")) {
    computerCount++;
  } else if (finalResultRound.includes("Win")) {
    userCount++;
  } else {
    userCount = userCount;
    computerCount = computerCount;
  }
  let currentScores = document.createElement ("p");
  currentScores.textContent = "User Score: " + userCount + "  Computer Score: " + computerCount;
  newDiv.appendChild(currentScores);
  endOfGame();

});
btnScissors.addEventListener("click", function(){
  let finalResultRound= playRound("Scissors", getComputerChoice());
  if (finalResultRound.includes("lose")) {
    computerCount++;
  } else if (finalResultRound.includes("Win")) {
    userCount++;
  } else {
    userCount = userCount;
    computerCount = computerCount;
  }
  let currentScores = document.createElement ("p");
  currentScores.textContent = "User Score: " + userCount + "  Computer Score: " + computerCount;
  newDiv.appendChild(currentScores);
  endOfGame();

});


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

function endOfGame() {
  if (userCount===5 || computerCount===5){
    const finalResult = document.createElement("p");
    if (userCount>computerCount){
      finalResult.textContent = "YOU WIN!";
      finalResult.style.color = "green";
      finalResult.style.fontSize = "30px";
    }
    else{
      finalResult.textContent= "YOU LOSE!";
      finalResult.style.color = "red";
      finalResult.style.fontSize = "30px";
    }
    newDiv.appendChild(finalResult);
    userCount = 0;
    computerCount = 0;
  }

}


