import { logOther, sum } from "./other.js"; //import and functions are hoisted to the top

console.log("Hi, there!");

func();

function func() {
  console.log("fucntion");
}

logOther();
console.log(sum(9, 10));
