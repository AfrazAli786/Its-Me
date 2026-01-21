//* 1st Draft
function comp_answer() {
  return Math.floor(Math.random() * 3) + 1;
}

function rock_paper_scissor(user_answer, computer_answer) {
  if (user_answer === computer_answer) {
    console.log("Tie");
  } else if (user_answer === 1 && computer_answer === 2) {
    console.log("You lose!");
  } else if (user_answer === 1 && computer_answer === 3) {
    console.log("You Win!");
  } else if (user_answer === 2 && computer_answer === 1) {
    console.log("You Win!");
  } else if (user_answer === 2 && computer_answer === 3) {
    console.log("You lose!");
  } else if (user_answer === 3 && computer_answer === 1) {
    console.log("You lose!");
  } else if (user_answer === 3 && computer_answer === 2) {
    console.log("You Win!");
  } else {
    console.log("");
  }
}