// *Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
// *What is my name - should respond with the name of the person. What if the name has not yet been mentioned?
// *Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
// *Add singing in the shower to my todo - Should add singing in the shower to a list of todos
// *Remove fishing from my todo - Should respond with "Removed fishing from your todo"
// *What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
// *What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019
// Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48
// Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". How do we set a timer in js? Google is your friend here!
// Add one or more command to your voice assistant

// Tried to create an object instead of if else statements in getReply() function
// but it was challenging to keep input somewhat dynamic.
// const commands = {
//   "Hello, my name is [name]": (input) => {
//     userName = getUserName(input);
//     return `Nice to meet you, ${userName}`;
//   },
//   "What is my name?": () => `Your name is ${userName}`,
//   "Add [todo] to my to do list.": (input) => {
//     const toDo = addToDo(input);
//     return `${toDo} added to your to do list.`;
//   },
// };
let userName = null;
const toDoList = [];
function getReply(input) {
  const addPattern = /Add (.+) to my to do list\./i;
  const removePattern = /Remove (.+) from my to do list\./i;
  const mathPattern = /what is (\d+)\s*([+\-*\/])\s*(\d+)\?/i;
  if (input === "Hello, my name is Tanya") {
    userName = getUserName(input);
    return `Nice to meet you, ${userName}`;
  } else if (input === "What is my name?") {
    return `Your name is ${userName}`;
  } else if (input === "How are you today?") {
    return "Good!";
  } else if (addPattern.test(input)) {
    const toDo = addToDo(input);
    return `${toDo} added to your to do list.`;
  } else if (removePattern.test(input)) {
    return removeToDo(input);
  } else if (input === "What is my to do?") {
    return `You have ${toDoList.length} items in your to do list: ${toDoList}`;
  } else if (input === "What day is it today?") {
    return currentDate();
  } else if (mathPattern.test(input)) {
    return calculateResult(input);
  }
  //   for (const key in commands) {
  //     if (input === key) {
  //       return commands[key](input);
  //     }
  //   }
}

console.log(getReply("Hello, my name is Tanya"));
console.log(getReply("What is my name?"));
console.log(getReply("How are you today?"));
console.log(getReply("Add baking to my to do list."));
console.log(getReply("Add singing in the shower to my to do list."));

function getUserName(input) {
  const regex = /Hello, my name is (.+)/i;
  const match = input.match(regex);
  if (match && match[1]) {
    return match[1];
  } else {
    return null;
  }
}

function addToDo(input) {
  const regex = /Add (.+) to my to do list\./i;
  const match = input.match(regex);
  if (match && match[1]) {
    const toDo = match[1];
    toDoList.push(toDo);
    return toDo;
  } else {
    return null;
  }
}
function removeToDo(input) {
  const regex = /Remove (.+) from my to do list\./i;
  const match = input.match(regex);
  if (match && match[1]) {
    const toDo = match[1];
    toDoList.splice(toDoList.indexOf(toDo), 1);
    return `${toDo} was removed from your list`;
  } else {
    return null;
  }
}

function currentDate() {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const index = currentDate.getMonth();
  const month = months[index];
  const year = currentDate.getFullYear();
  return `Today is ${day} of ${month} ${year}`;
}

function calculator(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      if (b !== 0) return a / b;
      else {
        return "Cannot divide by 0!";
      }
    default:
      return "Sorry, not a valid operation";
  }
}

function calculateResult(input) {
  const regex = /what is (\d+)\s*([+\-*\/])\s*(\d+)\?/i;
  const match = input.match(regex);
  if (match && match.length === 4) {
    const num1 = parseInt(match[1]);
    const operation = match[2];
    const num2 = parseInt(match[3]);
    return calculator(num1, num2, operation);
  } else {
    return "Invalid input.";
  }
}
//console.log(greetings("Hello, my name is Tanya"));
console.log(addToDo("Add dishes to my to do list."));
console.log(getReply("Remove fishing from my to do list."));
console.log(toDoList);
console.log(getReply("What is my to do?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 4 * 5?"));
console.log(getReply("what is 3/4?"));
