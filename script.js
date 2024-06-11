let computerScore = 0;
let humanScore = 0;

const getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 100) % 3;

  if (randomNumber == 0) return "rock";
  else if (randomNumber == 1) return "paper";
  else if (randomNumber == 2) return "scissors";
};

const getHumanChoice = function () {
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

const capitalizeFirstLetter = function (str) {
  let firstLetter = str[0];
  let rest = str.substring(1);

  firstLetter = firstLetter.toUpperCase();
  return firstLetter + rest;
};

const playRound = function () {
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
  } else {
    console.log("There's a tie!");
  }
};

const showScore = function () {
  console.log("       SCOREBOARD        ");
  console.log("*************************");
  console.log(`Computer: ${computerScore}`);
  console.log(`Human:    ${humanScore}`);
  console.log("*************************");
};

const playGame = function () {
  computerScore = 0;
  humanScore = 0;

  console.clear();
  console.log("*************************");
  showScore();
  console.log("There will be five rounds, let's begin!");

  for (let i = 0; i < 5; i++) {
    playRound();
    console.log("*************************");
  }

  showScore();
  if (computerScore > humanScore) {
    console.log("Computer wins the game!");
  } else if (humanScore > computerScore) {
    console.log("Human wins the game!");
  } else {
    console.log("It's a tie!");
  }
};

const startButton = document.querySelector("button");

startButton.addEventListener("click", playGame);
