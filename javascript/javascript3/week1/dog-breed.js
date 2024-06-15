document.addEventListener("DOMContentLoaded", domLoaded);

const imageContainer = document.getElementById("image-container");
const userInputContainer = document.getElementById("user-input");
let dogBreeds = {};
let randomDogBreed = "";

function domLoaded() {
  fetchRandomDogImage();
  fetchDogBreeds();
}

function fetchRandomDogImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      updateDom(data);
      randomDogBreed = data.message.split("/")[4];
      randomDogBreed = randomDogBreed.replace("-", " ");
      if (randomDogBreed.includes(" ")) {
        const [breedName, subBreed] = randomDogBreed.split(" ");
        randomDogBreed = `${
          subBreed.charAt(0).toUpperCase() + subBreed.slice(1)
        } ${breedName}`;
      } else {
        randomDogBreed =
          randomDogBreed.charAt(0).toUpperCase() + randomDogBreed.slice(1);
      }
      setupAutocomplete(randomDogBreed);
    })
    .catch((error) => console.log("Something went wrong", error));
}

function fetchDogBreeds() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      dogBreeds = data.message;
    })
    .catch((error) => console.log("Something went wrong", error));
}

function updateDom(photo) {
  imageContainer.innerHTML = "";
  const dogImage = document.createElement("img");
  dogImage.src = photo.message;
  dogImage.alt = "An image of the dog";
  dogImage.classList.add("dog-image");
  imageContainer.appendChild(dogImage);
}

// autocomplete
function setupAutocomplete(randomDogBreed) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = randomDogBreed;
  input.setAttribute("list", "breeds");

  const datalist = document.getElementById("breeds");

  Object.keys(dogBreeds).forEach((breed) => {
    if (dogBreeds[breed].length > 0) {
      dogBreeds[breed].forEach((subBreed) => {
        const option = document.createElement("option");
        option.value = `${subBreed} ${breed}`;
        datalist.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.value = breed;
      datalist.appendChild(option);
    }
  });
  userInputContainer.appendChild(input);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  userInputContainer.appendChild(submitBtn);
  submitBtn.textContent = "Submit";

  submitBtn.addEventListener("click", () => {
    const breed = input.value.toLowerCase().trim();
    let breedName, subBreed;
    const breedParts = breed.split(" ");
    breedName = breedParts[0];
    subBreed = breedParts[1];
    if (breedName && subBreed) {
      fetch(`https://dog.ceo/api/breed/${subBreed}/${breedName}/images/random`)
        .then((response) => response.json())
        .then((data) => updateDom(data))
        .catch((error) => console.log(error));
    } else if (dogBreeds[breed]) {
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => response.json())
        .then((data) => updateDom(data))
        .catch((error) => console.log(error));
    } else {
      alert("Breed not found");
    }
  });
}
