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

let computerScore = 0;
let humanScore = 0;

let capitalizeFirstLetter = function (str) {
  let firstLetter = str[0];
  let rest = str.substring(1);

  firstLetter = firstLetter.toUpperCase();
  return firstLetter + rest;
};

let playRound = function () {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();

  console.log(`You chose ${capitalizeFirstLetter(humanChoice)}`);
  console.log(`Computer chose ${capitalizeFirstLetter(computerChoice)}`);

  if (
    (computerChoice == "rock" && humanChoice == "paper") ||
    (computerChoice == "paper" && humanChoice == "scissors") ||
    (computerChoice == "scissors" && humanChoice == "rock")
  ) {
    console.log(
      `You win! ${capitalizeFirstLetter(
        humanChoice
      )} beats ${capitalizeFirstLetter(computerChoice)}`
    );
    humanScore++;
  } else if (
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper") ||
    (computerChoice == "rock" && humanChoice == "scissors")
  ) {
    console.log(
      `You lose! ${capitalizeFirstLetter(
        computerChoice
      )} beats ${capitalizeFirstLetter(humanChoice)}`
    );
    computerScore++;
  }
};
