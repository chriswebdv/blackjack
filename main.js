let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

let startGame = () => {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Get another card 😀";
  } else if (sum === 21) {
    message = "Winner winner chicken dinner! 😁";
    hasBlackJack = true;
  } else {
    message = "Snooze you lose! 🗿";
    isAlive = false;
  }

  messageEl.textContent = message;
};

let newCard = () => {
  console.log("Drawing a new card from the deck!");
};
