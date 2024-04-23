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
const randomFirstWord = firstWords[randomNumber];
const randomSecondWord = secondWords[randomNumber];
const nameLength = randomFirstWord.length + randomSecondWord.length;
console.log(
  `The startup: "${randomFirstWord} ${randomSecondWord}" contains ${nameLength} characters.`
);
