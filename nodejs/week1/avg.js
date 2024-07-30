let sum = 0;
const numArgs = process.argv.length - 2;

if (numArgs === 0) {
  console.log("Please provide the arguments");
} else {
  let notNumber = false;

  for (let i = 2; i < process.argv.length; i++) {
    if (isNaN(process.argv[i])) {
      notNumber = true;
      break;
    }
  }

  if (notNumber) {
    console.log("All arguments must be numbers");
  } else {
    for (let i = 2; i < process.argv.length; i++) {
      sum += +process.argv[i];
    }
    const avg = sum / numArgs;
    console.log(avg);
  }
}
