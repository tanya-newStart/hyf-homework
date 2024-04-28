function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}

logString("Happy Sunday!", 4);

// This function emulates sending emails to receipients
const receipientsArray =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohammed@gmail.com".split(
    "|"
  );
for (let i = 0; i < receipientsArray.length; i++) {
  sendEmailTo(receipientsArray[i]);
}
function sendEmailTo(recepient) {
  // But really it only logs out a string

  console.log("email sent to " + recepient);
}
