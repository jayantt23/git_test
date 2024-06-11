let getComputerChoice = function () {
  let randomNumber = Math.floor(Math.random() * 100) % 3;
  if (randomNumber == 0) return "rock";
  else if (randomNumber == 1) return "paper";
  else if (randomNumber == 2) return "scissors";
};
