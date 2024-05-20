// Favorite dishes
// Create an array of strings with your favorite dishes.
const ul = document.getElementById("food-list");
const dishes = ["Pasta", "Sushi", "Dumplings", "Kebab"];

// With js select a ul in the DOM. You add the ul to the html file.
for (let dish of dishes) {
  console.log(dish);
  const li = document.createElement("li");
  li.innerText = dish;
  ul.appendChild(li);
}
// Now loop through each element of the favorite dishes array, you create an li element and set the text to the favorite dish.

// Then append the li element to the ul element.
