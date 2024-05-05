// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.
const user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

console.log(user);
// for in loop
let schedule = {};
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

//sum of values
let salaries = {};

function sum(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}
console.log(sum(salaries));

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      return obj[key] * 2;
    }
  }
}

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};
console.log(menu);

// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(str) {
  const arr = str.split("-");
  const upperCaseArr = [];
  for (let word of arr) {
    const firstLetter = word.charAt(0).toUpperCase();
    const rest = word.slice(1);
    const newWord = firstLetter + rest;
    upperCaseArr.push(newWord);
  }
  return upperCaseArr.join("");
}
console.log(camelize("gha-gha-gha"));
