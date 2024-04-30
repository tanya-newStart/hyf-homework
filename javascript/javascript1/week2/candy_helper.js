const candies = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  "Chewing-gum": 0.03,
};

const boughtCandyPrices = [];
let amountToSpend = +(Math.random() * 100).toFixed(2); // + converts str back to the number

function addCandy(candyType, weight) {
  const price = +(candies[candyType] * weight).toFixed(2); // + converts str back to the number
  let budget = amountToSpend - price;
  if (budget > 0 && canBuyMoreCandy()) {
    boughtCandyPrices.push(price);
    amountToSpend = budget;
    return `You can buy more, so please do! You have ${amountToSpend.toFixed(
      2
    )} to spend.`;
  } else {
    return `You are buying candy that costs ${price}.You have only ${amountToSpend.toFixed(
      2
    )} left. Enough candy for you?!`;
  }
}
//USING FOR LOOP HERE:
//function canBuyMoreCandy() {
//  for (let i = 0; i < boughtCandyPrices.length; i++) {
//    amountToSpend -= boughtCandyPrices[i];
//  }
// return amountToSpend > 0;
//}

// WHILE LOOP
function canBuyMoreCandy() {
  let totalPrice = 0;
  let index = 0;
  while (index < boughtCandyPrices.length) {
    totalPrice += boughtCandyPrices[index];
    index++;
  }
  return totalPrice <= amountToSpend;
}

//testing code
console.log(`You have ${amountToSpend}`);
console.log(addCandy("Chewing-gum", 100));
console.log(addCandy("Sweet", 10));
console.log(addCandy("Toffee", 20));
console.log(addCandy("Chocolate", 100));
console.log(boughtCandyPrices);
console.log(canBuyMoreCandy());
