let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard + 5;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");

let startGame = () => {
  if (sum <= 20) {
    message = "Get another card 😀";
  } else if (sum === 21) {
    message = "Winner winner chicken dinner! 😁";
    hasBlackJack = true;
  } else {
    message = "Snooze you lose! 🗿";
    isAlive = false;
  }

  console.log(message);
  messageEl.textContent = message;
};
