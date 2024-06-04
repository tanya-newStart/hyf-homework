const array = [1, 2, 3, 4];
const output = array.reduce((acc, currentVal, index) => {
  const curr = currentVal * 3;
  acc[index] = curr;
  return acc;
}, []);
console.log(output);

const array1 = [1, 2, 3];
const obj = {
  a: "something",
  b: "something else",
};

const obj1 = { ...obj };
console.log(obj1);
