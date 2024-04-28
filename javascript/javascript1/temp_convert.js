//functions
function convertTemp(temp, isInF) {
  if (isInF) {
    const tempInC = ((temp - 32) * 5) / 9;
    return tempInC;
  } else {
    const tempInF = (temp * 9) / 5 + 32;
    return tempInF;
  }
}
const temp = 35;
const isInF = true;
console.log(convertTemp(temp, isInF));

function areaOfCircle(radius) {
  const area = Math.PI * radius * radius;
  const areaRounded = area.toFixed(2);
  return areaRounded;
}

console.log(areaOfCircle(9));
//function convertBack(tempInF) {
//  const tempInC = ((tempInF - 32) * 5) / 9;
//  return tempInC;
//}

//console.log(convertBack(95));
