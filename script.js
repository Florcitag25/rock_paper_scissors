let computerSelection = getComputerChoice();
let userSelection = prompt("Choose!");


function firstRound(userSelection, computerSelection){
    let firstLetterUser = (userSelection.slice(0,1)).toUpperCase();
    let restOfLetters = (userSelection.slice(1,userSelection.length)).toLowerCase();
    let userSelection2 = firstLetterUser+restOfLetters;
    if (userSelection2===computerSelection){
        return "Tie! Try again."
    }
    else if (userSelection2=="Rock" && computerSelection=="Paper"){
        return "Paper beats Rock! You lose!";
    }
    else if (userSelection2=="Rock" && computerSelection=="Scissors"){
        return "Rock beats Scissors! You Win!";
    }
    else if (userSelection2=="Paper" && computerSelection=="Rock"){
        return "Paper beats Rock! You Win!";
    }
    else if (userSelection2=="Paper" && computerSelection=="Scissors"){
        return "Scissors beats Paper! You lose!";
    }
    else if (userSelection2=="Scissors" && computerSelection=="Rock"){
        return "Rock beats Scissors! You lose!";
    }
    else{
        return "Scissors beats Paper! You Win!";
    }
}


function getComputerChoice(){
    const choiceOptions=["Rock","Paper","Scissors"];
    let numberChosen=Math.floor(Math.random()*choiceOptions.length);
    return choiceOptions[numberChosen];
}

console.log("Computer selection: "+ computerSelection);
console.log("User selection: "+ userSelection);
console.log(firstRound(userSelection,computerSelection));
