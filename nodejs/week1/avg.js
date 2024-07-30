let sum = 0;
const numArgs = process.argv.length - 2;

for (let i = 2; i < process.argv.length; i++) {
  sum += +process.argv[i];
}

const avg = sum / numArgs;
console.log(avg);
