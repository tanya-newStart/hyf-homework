function smartWear(temp) {
  const clothes = [
    "shorts and a t-shirt",
    "jeans and a sweater",
    "light coat",
    "winter coat and a winter hat",
  ];
  if (temp >= 18) {
    return clothes[0];
  } else if (temp >= 12) {
    return clothes[1];
  } else if (temp >= 5) {
    return clothes[2];
  } else if (temp >= -5) {
    return clothes[3];
  } else {
    return "Stay home! It's freezing!";
  }
}
const clothesToWear = smartWear(8);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
