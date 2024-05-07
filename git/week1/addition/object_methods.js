const user1 = {
  name: "Emil",
  age: 25,
  role: "Teacher",
  classes: ["Javascript 1", "Javascript 2"],
  hobbies: {
    favourite: "computers",
    sports: "running to class",
  },
};
const user2 = {
  name: "Peter",
  age: 42,
  role: "Teacher",
  classes: ["Maths", "Physics"],
  hobbies: {
    favourite: "Raspberry Pi",
    sports: "Tennis",
  },
};
const users = [user1, user2];

const keysToLog = ["name", "age", "hobbies"];
let output = "";

for (let i = 0; i < users.length; i++) {
  let user = users[i];
  for (let j = 0; j < keysToLog.length; j++) {
    let key = keysToLog[j];
    let value = user[key];

    if (typeof value === "object") {
      output += `${key}:\n`;
      const entries = Object.entries(value);
      for (const entry of entries) {
        output += `${entry[0]}: ${entry[1]}\n`;
      }
    } else {
      output += `${key}: ${value}\n`;
    }
  }
  output += "\n";
}

console.log(output);
