const result = document.querySelector(".result");
const scoreSpan = document.querySelector("#score");
const scoreComputerSpan = document.querySelector("#scoreComputer");

const GAME_OPTIONS = {      // ENUM
    rock: "rock",
    paper: "paper",
    scissors: "scissors"
}

let humanScore = 0;
let computerScore = 0;

const playHuman = (humanChoice) => {
  console.log("Human choice:", humanChoice);
  const computerChoice = playComputer();
  playTheGame(humanChoice, computerChoice);
}

const playComputer = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3)
  return choices[randomIndex];
}
const playTheGame = (humanChoice, computerChoice) => {
    console.log("Humano:", humanChoice, "Computador:", computerChoice)
    if (humanChoice === computerChoice) {
        return result.innerHTML = "Empate"
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
               (humanChoice === "paper" && computerChoice === "rock") ||
               (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        scoreSpan.innerHTML = humanScore;
        return result.innerHTML = "Você ganhou!"
    } else {
        computerScore++;
        scoreComputerSpan.innerHTML = computerScore;
        return result.innerHTML = "Computador ganhou!"
    }
}