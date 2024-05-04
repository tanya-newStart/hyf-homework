const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.includes(studentName)) {
    console.log(`${studentName} is already in the class`);
    return;
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
    console.log(`${studentName} has been added to the class`);
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
