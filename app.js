const ComputerChoiceDisplay = document.getElementById("computer-choice");
const UserChoiceDisplay = document.getElementById("user-choice");
const ResultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3); //or you can use possibleChoices.length

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  ComputerChoiceDisplay.innerHTML = computerChoice;
}
