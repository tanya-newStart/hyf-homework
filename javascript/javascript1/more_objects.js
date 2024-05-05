const user = {
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
const user3 = {
  name: "Zlata",
  age: 18,
  role: "Student",
  classes: ["Art", "History"],
  hobbies: {
    favourite: "Cooking",
    sports: "Running",
  },
};
// function renderObject(obj){

// }

const users = [user, user2, user3];
const keysToLog = ["name", "role", "hobbies"];
let result = "";
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  for (let j = 0; j < keysToLog.length; j++) {
    const key = keysToLog[j];
    if (typeof user[key] === "object") {
      result += JSON.stringify(user[key]);
    } else {
      result += user[key] + " ";
    }
  }
  result += "\n";
}
console.log(result);
