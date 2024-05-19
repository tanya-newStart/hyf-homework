const state = {
  // initial values
  userName: null,
  toDoList: [],
};
const patterns = {
  namePattern: /Hello, my name is (.+)/i,
  addPattern: /Add (.+) to my to do list\./i,
  removePattern: /Remove (.+) from my to do list\./i,
  showToDoPattern: /What is my to do\?/,
  mathPattern:
    /what(?:'s| is) (\d+) (plus|\+|minus|-|times|\*|multiplied by|x|divided by|\/) (\d+)\?/i,
  tempPattern: /It is (\d+) degrees. What do I wear\?/,
  getNamePattern: /What is my name\?/i,
  datePattern: /What day is it today\?/i,
  timerPattern: /Set a timer for (\d+) min/i,
};
const commands = {
  [patterns.namePattern]: {
    reply: (input) => {
      const userName = getUserName(input);
      if (userName) {
        state.userName = userName;
        return `Nice to meet you, ${state.userName}`;
      } else {
        return "Sorry, I could not determine your name.";
      }
    },
  },
  [patterns.addPattern]: {
    reply: (input) => addToDo(input),
  },
  [patterns.removePattern]: {
    reply: (input) => removeToDo(input),
  },
  [patterns.getNamePattern]: {
    reply: () => {
      if (state.userName) {
        return `Your name is ${state.userName}.`;
      } else return `Sorry, I cannot determine your name.`;
    },
  },
  [patterns.datePattern]: {
    reply: () => currentDate(),
  },
  [patterns.mathPattern]: {
    reply: (input) => calculateResult(input),
  },

  [patterns.tempPattern]: {
    reply: (input) => smartWear(input),
  },
  [patterns.timerPattern]: {
    reply: (input) => setTimer(input),
  },
  [patterns.showToDoPattern]: {
    reply: () => state.toDoList,
  },
};

//main function
function getReply(input) {
  for (const pattern in patterns) {
    if (patterns[pattern].test(input)) {
      const replyFunction = commands[patterns[pattern]].reply;
      return replyFunction(input);
    }
  }
  return "Sorry, I don't understand that command.";
}

function getUserName(input) {
  const match = input.match(patterns.namePattern);
  if (match[1]) {
    return match[1];
  } else {
    return null;
  }
}

function addToDo(input) {
  const match = input.match(patterns.addPattern);
  if (match[1]) {
    const toDo = match[1];
    if (!state.toDoList.includes(toDo)) {
      state.toDoList.push(toDo);
      return `${toDo} added to your list`;
    } else {
      return `${toDo} is alredy in your list.`;
    }
  } else {
    return "Sorry, I'm unable to perform that command. Check your input, please.";
  }
}
function removeToDo(input) {
  const match = input.match(patterns.removePattern);
  if (match[1]) {
    const toDo = match[1];
    const index = state.toDoList.indexOf(toDo);
    if (index !== -1) {
      state.toDoList.splice(index, 1);
      return `${toDo} was removed from your list.`;
    } else {
      return `${toDo} is not in your list.`;
    }
  } else {
    return "Invalid input for removing a to-do item.";
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
    case "plus":
      return a + b;
    case "-":
    case "minus":
      return a - b;
    case "*":
    case "multiplied by":
    case "times":
    case "x":
      return a * b;
    case "/":
    case "divided by":
      if (b !== 0) return a / b;
      else {
        return "Cannot divide by 0!";
      }
    default:
      return "Sorry, not a valid operation";
  }
}

function calculateResult(input) {
  const match = input.match(patterns.mathPattern);
  console.log("Match:", match); // Debugging line to see what is matched
  if (match && match.length === 4) {
    const num1 = parseInt(match[1]); //extracts numbers and operation from a string
    const operation = match[2];
    const num2 = parseInt(match[3]);
    return calculator(num1, num2, operation);
  } else {
    return "Invalid input.";
  }
}

function setTimer(input) {
  const match = input.match(patterns.timerPattern);
  if (match && match.length === 2) {
    const minutes = parseInt(match[1]);
    setTimeout(function () {
      console.log("Time is up!");
    }, minutes * 60 * 1000);
    return `Timer is set for ${minutes} min.`;
  } else {
    return "Invalid input for setting a timer.";
  }
}
function smartWear(input) {
  const match = input.match(patterns.tempPattern);
  if (match && match.length === 2) {
    const temp = match[1];
    const clothes = [
      ["shorts and a t-shirt", [18, 48]],
      ["jeans and a sweater", [12, 18]],
      ["light coat", [5, 12]],
      ["winter coat and a winter hat", [-5, 5]],
    ];
    for (const element of clothes) {
      const tempRange = element[1];
      if (temp >= tempRange[0] && temp < tempRange[1]) {
        return element[0];
      }
    }
    return `Stay home! It's freezing!`;
  }
}
//Test the code
console.log(getReply("Hello, my name is Tanya"));
console.log(getReply("What is my name?"));
console.log(getReply("How are you today?"));
console.log(getReply("Add baking to my to do list."));
console.log(getReply("Add singing in the shower to my to do list."));
console.log(getReply("Remove fishing from my to do list."));
console.log(getReply("What is my to do?"));
console.log(getReply("What day is it today?"));
console.log(getReply("what is 4 * 5?"));
console.log(getReply("what is 3/4?"));
console.log(getReply("It is 20 degrees. What do I wear?"));
console.log(getReply("Set a timer for 1 min"));
