let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

if (sum <= 20) {
  message += "Get another card 😀";
} else if (sum === 21) {
  message += "Winner winner chicken dinner! 😁";
  hasBlackJack = true;
} else {
  message += "Snooze you lose! 🗿";
  isAlive = false;
}

console.log(message);
