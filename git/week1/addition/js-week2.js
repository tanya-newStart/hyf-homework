function getFullname(
  firstname,
  lastname,
  useFormalName = false,
  isFemale = false
) {
  try {
    if (!firstname || !lastname)
      throw "Both first and last names are required.";
    if (useFormalName && isFemale) {
      return "Baroness " + firstname + " " + lastname;
    }
    if (useFormalName) {
      return "Lord " + firstname + " " + lastname;
    } else {
      return firstname + " " + lastname;
    }
  } catch (error) {
    return error;
  }
}

fullname1 = getFullname("Benjamin", "Hughes", true); // returns "Benjamin Hughes"
fullname2 = getFullname("Tanya", "Dewland", true, true); //need another input of type "checkbox" for gender in html
fullname3 = getFullname("Quick", false, true);
console.log(fullname1);
console.log(fullname2);
console.log(fullname3);

getFullname("Benjamin", "Hughes", true); // returns "Lord Benjamin Hughes"`
console.log(getFullname("Benjamin", "Hughes", false)); // returns "Benjamin Hughes"
console.log(getFullname("", ""));

//Day of the week
// With todays weekday a tuesday
function getEventWeekday(num) {
  const today = new Date();
  let weekday = today.getDay();
  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day_index = (weekday + num) % 7;
  return week[day_index];
}
console.log(getEventWeekday(1));
console.log(getEventWeekday(5));

// What to wear

function smartWear(temp) {
  const clothes = [
    "shorts and a t-shirt",
    "jeans and a sweater",
    "light coat",
    "winter coat and a winter hat",
  ];
  if (temp >= 18) {
    return clothes[0];
  } else if (temp <= 17 && temp > 12) {
    return clothes[1];
  } else if (temp <= 12 && temp >= 5) {
    return clothes[2];
  } else if (temp < 5 && temp >= -5) {
    return clothes[3];
  } else {
    return "Stay home! It's freezing!";
  }
}
const clothesToWear = smartWear(-8);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"

//Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return; // Exit the function if the student is already in the class
  }
  if (studentName === "") {
    console.log("No name was entered.");
    return;
  }

  if (studentName === "Queen") {
    class07Students.push(studentName);
    console.log("Welcome aboard, Your Majesty!");
  } else if (class07Students.length < 6) {
    class07Students.push(studentName);
    console.log(`Student ${studentName} has been added to the class`);
  } else {
    console.log("Class is full.");
  }
}

// Test the function
addStudentToClass("tanya");
addStudentToClass("zlata");
addStudentToClass("alesya");
addStudentToClass("jim");
addStudentToClass("");
addStudentToClass("sahil");
addStudentToClass("denis");

console.log(class07Students);

addStudentToClass("zuko");
addStudentToClass("Queen");

console.log(class07Students);

function getNumberOfStudents() {
  return class07Students.length;
}

// Candy Helper
//price per g
const candies = {
  Sweet: 0.5,
  Chocolate: 0.7,
  Toffee: 1.1,
  "Chewing-gum": 0.03,
};

const boughtCandyPrices = [];
const amountToSpend = (Math.random() * 100).toFixed(2);

function addCandy(candyType, weight) {
  let price = candies[candyType] * weight;
  if (canBuyMoreCandy()) {
    boughtCandyPrices.push(price);
    console.log("Nice choice! You can buy more!");
  } else {
    console.log("You are out of money.");
  }
}
function canBuyMoreCandy() {
  let totalPrice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  return totalPrice <= amountToSpend;
}
addCandy("Chewing-gum", 20); // Adds the price of 20 grams of sweets to the array boughtCandyPrices
addCandy("Sweet", 5);
addCandy("Toffee", 10);
addCandy("Toffee", 100);
console.log(boughtCandyPrices);
console.log(amountToSpend);
console.log(canBuyMoreCandy());
