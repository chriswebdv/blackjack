let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;
let hasBlackJack = false;
let isAlive = true;

let sum = firstCard + secondCard;

if (sum <= 20) {
  console.log("Get another card 😀");
} else if (sum === 21) {
  console.log("Winner winner chicken dinner! 😁");
  hasBlackJack = true;
} else {
  console.log("Snooze you lose! 🗿");
  isAlive = false;
}

console.log(hasBlackJack);
console.log(isAlive);
