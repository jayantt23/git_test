let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 100) % 3;

  if (randomNumber == 0) return "rock";
  else if (randomNumber == 1) return "paper";
  else if (randomNumber == 2) return "scissors";
};

let getHumanChoice = function () {
  let choice = prompt("Enter your choice:");
  choice = choice.toLowerCase();

  if (choice == "rock" || choice == "paper" || choice == "scissors")
    return choice;
  else {
    console.log(`Invalid choice. Please enter something from the following:
- Rock
- Paper
- Scissors`);
    return getHumanChoice();
  }
};
