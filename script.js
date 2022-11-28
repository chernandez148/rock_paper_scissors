let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user_score");
const compScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector("score_board");
const result_p = document.querySelector(".result p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissor_div = document.getElementById("Scissors");

function getCompChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user_choice, comp_choice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${user_choice} beats ${comp_choice}, You win!`;
}

function lose(user_choice, comp_choice) {
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${user_choice} looses to ${comp_choice}, You lost.`;
}

function tie(user_choice, comp_choice) {
  result_p.innerHTML = `${user_choice} ties with ${comp_choice}, You tied!`;
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "RockScissors":
    case "PaperRock":
    case "ScissorsPaper":
      win(userChoice, compChoice);
      break;
    case "RockPaper":
    case "PaperScissors":
    case "ScissorsRock":
      lose(userChoice, compChoice);
      break;
    case "RockRock":
    case "ScissorsScissors":
    case "PaperPaper":
      tie(userChoice, compChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function () {
    game("Rock");
  });

  paper_div.addEventListener("click", function () {
    game("Paper");
  });

  scissor_div.addEventListener("click", function () {
    game("Scissors");
  });
}

main();
