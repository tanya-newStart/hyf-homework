const firstWords = [
  "Tech",
  "Labs",
  "Innovate",
  "Cloud",
  "NexGen",
  "Solutions",
  "Digital",
  "Spark",
  "Genius",
  "Hub",
];
const secondWords = [
  "Forge",
  "Venture",
  "Code",
  "Analytics",
  "Matrix",
  "Insight",
  "Byte",
  "Logic",
  "Pulse",
  "Edge",
];

const randomNumber = Math.floor(Math.random() * 10); //random number between 0 and 9
let firstOne = firstWords[randomNumber];
let secondOne = secondWords[randomNumber];
let nameLength = firstOne.length + secondOne.length;
console.log(
  `The startup: "${firstOne} ${secondOne}" contains ${nameLength} characters.`
);

function getCount(str) {
  let arr = str.split("");
  let arr_vowel = [];
  for (let i = 0; i < arr.length; i++) {
    if (/[aeiou]/.test(arr[i])) {
      arr_vowel.push(arr[i]);
    }
  }
  return arr_vowel.length;
}
console.log(getCount("a bacde "));

const numbers = [4, 9, 16, 25, 29];

let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);

const points = [40, 100, 1, 5, 25, 10];

points.sort(function (a, b) {
  return a - b;
});

function max(a, b) {
  return a > b ? a : b;
}
console.log(max(4, 2));
console.log(max(5, 5));

function pow(x, n) {
  return n >= 1
    ? (function () {
        let result = x;
        for (let i = 1; i < n; i++) {
          result *= x;
        }
        return result;
      })()
    : "n should be an integer greater or equal to 1";
}

console.log(pow(2, 4));

for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}

let i = 3;
while (i--) {
  console.log(i);
}

function findPrime(n) {
  for (let i = 2; i < n; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) console.log(i);
  }
}
findPrime(10);
