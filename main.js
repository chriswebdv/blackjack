let firstCard = Math.floor(Math.random() * 10) + 2;
let secondCard = Math.floor(Math.random() * 10) + 2;

let sum = firstCard + secondCard;

if (sum < 21) {
  console.table("Get another card 😀");
} else if (sum === 21) {
  console.log("Winner winner chicken dinner! 😁");
} else {
  console.log("Snooze you lose! 🗿");
}
