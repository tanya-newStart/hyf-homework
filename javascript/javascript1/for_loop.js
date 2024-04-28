function logString(stringToLog, numberOfTimesToLog) {
  for (let i = 0; i < numberOfTimesToLog; i++) {
    console.log(stringToLog);
  }
}

logString("Happy Sunday!", 4);

// This function emulates sending emails to receipients
function sendEmailTo(recepient) {
  // But really it only logs out a string
  const receipientsArray = recepient.split("|");
  for (let i = 0; i < receipientsArray.length; i++) {
    console.log("email sent to " + receipientsArray[i]);
  }
}
sendEmailTo("jj|gjg");
