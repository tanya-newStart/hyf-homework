const candies = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  "Chewing-gum": 0.03,
};

const boughtCandyPrices = [];
const budget = Math.random() * 100;
let amountToSpend = budget;

function addCandy(candyType, weight) {
  const price = candies[candyType] * weight;
  if (amountToSpend > 0 && canBuyMoreCandy()) {
    amountToSpend -= price;
    boughtCandyPrices.push(price);
    return true;
  } else {
    return false;
  }
}
function orderStatus(success) {
  if (success) {
    return `You can buy more, so please do! You have ${amountToSpend.toFixed(
      2
    )} to spend.`;
  } else {
    return `You don't have enough money. You have only ${amountToSpend.toFixed(
      2
    )} left. Enough candy for you?!`;
  }
}

//USING FOR LOOP HERE:
function canBuyMoreCandy() {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }
  return totalPrice <= amountToSpend;
}

// WHILE LOOP
// function canBuyMoreCandy() {
//
//   let index = 0;
//   while (index < boughtCandyPrices.length) {
//     totalPrice += boughtCandyPrices[index];
//     index++;
//   }
//   return totalPrice <= amountToSpend;
// }

//testing code
console.log(`You have ${amountToSpend.toFixed()}`);
addCandy("Chewing-gum", 100);
addCandy("Sweet", 50);
const message = orderStatus(addCandy("Toffee", 20));
console.log(message);
console.log(boughtCandyPrices);
console.log(canBuyMoreCandy());
