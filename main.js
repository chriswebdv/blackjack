let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");

let startGame = () => {
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
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
  let thirdCard = 8;
  sum += thirdCard;
  cards.push(sum);
  renderGame();
};
