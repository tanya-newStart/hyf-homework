// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");

styles[Math.floor((styles.length - 1) / 2)] = "Classics";

console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log(styles);

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.
// P.S. A zero 0 is a valid number, please don’t stop the input on zero.

// Run the demo

// function sumInput() {
//   let sum = 0;
//   const arr = [];
//   while (true) {
//     const num = prompt("Enter a number:");
//     if (isNaN(num) || num === null) break;
//     const numConverted = parseInt(num);
//     if (numConverted === 0) break;
//     arr.push(numConverted);
//   }
//   for (let number of arr) {
//     sum += number;
//   }
//   return sum;
// }
// sumInput();

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

// The task is: find the contiguous subarray of arr with the maximal sum of items.

// Write the function getMaxSubSum(arr) that will return that sum.

function getMaxSubSum(arr) {
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let subSum = 0;
    for (let j = i; j < arr.length; j++) {
      subSum += arr[j];
      maxSum = Math.max(maxSum, subSum);
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([1, -2, -3, -9]));
