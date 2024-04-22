const firstWords =[
    "Tech",
    "Labs",
    "Innovate",
    "Cloud",
    "NexGen",
    "Solutions",
    "Digital",
    "Spark",
    "Genius",
    "Hub"
];
const secondWords =[
    "Forge",
    "Venture",
    "Code",
    "Analytics",
    "Matrix",
    "Insight",
    "Byte",
    "Logic",
    "Pulse",
    "Edge"
];

const randomNumber = Math.floor(Math.random() * 10);//random number between 0 and 9
const firstOne = firstWords[randomNumber];
const secondOne = secondWords[randomNumber];
const nameLength =firstOne.length+secondOne.length;
console.log(`The startup: "${firstOne} ${secondOne}" contains ${nameLength} characters.`);