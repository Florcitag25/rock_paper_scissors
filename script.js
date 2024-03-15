function getComputerChoice(){
    const choiceOptions=["Rock","Paper","Scissors"];
    let numberChosen=Math.floor(Math.random()*choiceOptions.length);
    console.log(numberChosen);
    return choiceOptions[numberChosen];
}

console.log(getComputerChoice());