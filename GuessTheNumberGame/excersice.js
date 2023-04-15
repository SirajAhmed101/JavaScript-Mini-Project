let guessNum = document.querySelector("#number");
let btn = document.querySelector("#btn1");
let resetBtn = document.querySelector("#btn2");

const output = document.querySelector(".result");

let preValue = document.querySelector("#prevalue");

let randomNum = Math.floor(Math.random() * 100) + 1;

let guessCount = 1;

resetBtn.style.display = "none";
//  using fOR LOOP

function guessNumber() {
  let guessNumValue = Number(guessNum.value);

  if (randomNum === guessNumValue) {
    output.innerText = `Congratulations! You got it right!`;
    setGameOver();
  } else if (guessCount === 10) {
    output.innerText = `Your Chances has benn finished.`;
    setGameOver();
  } else {
    if (guessNumValue > randomNum) {
      output.innerText = "Your Guess is too high, Guess Low";
    } else if (guessNumValue < randomNum) {
      output.innerText = "Your Guess is too low, Guess High";
    }
  }
  guessCount++;
  preValue.innerText += `${guessNumValue}, `;
}

function setGameOver() {
  guessNum.disabled = true;
  btn.disabled = true;
  resetBtn.style.display = "block";
}

function resetGame() {
  location.reload();
}

btn.addEventListener("click", guessNumber);
resetBtn.addEventListener("click", resetGame);
