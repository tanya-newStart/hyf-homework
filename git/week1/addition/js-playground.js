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
let firstOne = firstWords[randomNumber];
let secondOne = secondWords[randomNumber];
let nameLength =firstOne.length+secondOne.length;
console.log(`The startup: "${firstOne} ${secondOne}" contains ${nameLength} characters.`);

function getCount(str) {
    let arr = str.split('');
    let arr_vowel=[];
    for(i=0;i<arr.length;i++){
      if (/[aeiou]/.test(arr[i])) {
        arr_vowel.push(arr[i]);
      }
    }
    return arr_vowel.length;
  }
  console.log(getCount("a bacde "));