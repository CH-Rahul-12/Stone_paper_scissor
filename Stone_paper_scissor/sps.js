function play(playerChoice) {
  const choices = ["stone", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)]; //Explain this math function how it working
  let result = "";
  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === "stone" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "stone") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "You Win!";
  } else {
    result = "You lose";
  }
  document.getElementById('computerChoice').innerHTML = getHandemoji(computerChoice)
  document.getElementById('playerChoice').innerHTML = getHandemoji(playerChoice)
  document.getElementById('result').innerHTML = result;
}



function getHandemoji(choice){
    switch(choice){
        case 'stone':
            return "✊";
        case 'paper':
            return "✋";
        case 'scissors':
            return "✌️"
        default:
            return '';
    }
}
