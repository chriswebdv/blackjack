let playerObj = {
  name: "Thomas",
  chips: 175,
};
let firstCard;
let secondCard;
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el");
let playerEl = document.querySelector("#player-el");
playerEl.textContent = playerObj.name + ": $" + playerObj.chips;

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    return 11;
  } else if (randomCard === 11 || randomCard === 12 || randomCard === 13) {
    return 10;
  } else {
    return randomCard;
  }
}

let startGame = () => {
  isAlive = true;
  firstCard = getRandomCard();
  secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

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
  if (isAlive === true && hasBlackJack === false) {
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cards.push(thirdCard);
    console.log(cards);
    renderGame();
  }
};
