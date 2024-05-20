const input = document.getElementById("user-name");
const button = document.getElementById("btn");
let inputValue = "";
button.addEventListener("click", function () {
  inputValue = input.value;
  if (inputValue.trim() === "") {
    console.log("The name is required.");
    return;
  }

  console.log(inputValue);

  const spiritAnimals = [
    "The Fire Dragon",
    "Swift Fox",
    "Playful Dolphin",
    "Powerful Lion",
    "Wise Owl",
    "Pure Swan",
    "Determined Turtle",
    "Happy Hippo",
    "Lucky Ladybug",
    "Kind Koala",
  ];
  const randomNum = Math.floor(Math.random() * 10);
  const randomAnimal = spiritAnimals[randomNum];

  const spirit = `${inputValue} - ${randomAnimal}`;

  console.log(spirit);
  const userSpirit = document.getElementById("spirit-animal");
  userSpirit.innerText = spirit;
  button.innerText = "Get a new spirit animal";
});
