const fruits = ["apple", "banana", "orange"];

fruits.push("kiwi");

console.log(fruits);

const getFruit = fruits.pop();

console.log(getFruit);
console.log(fruits);

fruits.push("dragonfruit", "elderberry");
console.log(fruits);

function checkBasket(fruit) {
  const isInBasket = fruits.includes(fruit);
  if (isInBasket) return `${fruit} in fruit basket`;
}

console.log(checkBasket("banana"));

fruits.unshift("strawberry");
console.log(fruits);

const removedFruit = fruits.shift("strawberry");
console.log(removedFruit);
console.log(fruits);
