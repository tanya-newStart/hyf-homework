const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Tala";
const indexOfNameToRemove = names.indexOf(nameToRemove);

if (indexOfNameToRemove >= 0) {
  names.splice(indexOfNameToRemove, 1); //removes one element at specified index
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
