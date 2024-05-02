function smartWear(temp) {
  const clothes = [
    ["shorts and a t-shirt", [18, 48]],
    ["jeans and a sweater", [12, 18]],
    ["light coat", [5, 12]],
    ["winter coat and a winter hat", [-5, 5]],
  ];
  for (let i = 0; i < clothes.length; i++) {
    const tempRange = clothes[i][1];
    if (temp >= tempRange[0] && temp < tempRange[1]) {
      return clothes[i][0];
    }
  }
  return `Stay home! It's freezing!`;
}

const clothesToWear = smartWear(12);
console.log(clothesToWear); // Logs out: "shorts and a t-shirt"
