// Create a function that prints the numbers from 1 to 100. But for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

// When that works. Make the two number for multiples into parameters. So it can be called like this:

// fizzBuzz(4, 12);

function multiples(n) {
  let result = "";
  for (let i = 1; i < n; i++) {
    result += "\n" + i;
    if (i % 3 === 0) {
      result += "Fizz";

      if (i % 3 === 0 && i % 5 === 0) {
        result += "Buzz";
      }
    }
  }
  return result;
}
//console.log(multiples(20));

function multiplesOfNum(n1, n2) {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    if (i % n1 === 0 && i % n2 === 0) {
      result += "FizzBuzz\n";
    } else if (i % n1 === 0) {
      result += "Fizz\n";
    } else if (i % n2 === 0) {
      result += "Buzz\n";
    } else {
      result += i + "\n";
    }
  }
  return result;
}
console.log(multiplesOfNum(3, 5));
