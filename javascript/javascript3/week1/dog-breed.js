document.addEventListener("DOMContentLoaded", domLoaded);
const dogContainer = document.getElementById("dog-breed");
const imageContainer = document.getElementById("image-container");
const userInputContainer = document.getElementById("user-input");
let dogBreeds = {};
let randomDogBreed = "";

async function domLoaded() {
  await fetchRandomDogImage();
  await fetchDogBreeds();
  setupAutocomplete(randomDogBreed);
}

async function fetchRandomDogImage() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
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
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

async function fetchDogBreeds() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const data = await response.json();
    dogBreeds = data.message;
  } catch (error) {
    onsole.log("Something went wrong", error);
  }
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
  input.placeholder = "Enter a dog breed";
  input.setAttribute("list", "breeds");
  const textBreed = document.createElement("h2");
  textBreed.textContent = randomDogBreed;

  dogContainer.appendChild(textBreed);

  const datalist = document.getElementById("breeds");
  datalist.innerHTML = "";

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

  submitBtn.addEventListener("click", async () => {
    const breed = input.value.toLowerCase().trim();
    let breedName, subBreed;
    const breedParts = breed.split(" ");
    breedName = breedParts[0];
    subBreed = breedParts[1];
    try {
      let data;
      if (breedName && subBreed) {
        const response = await fetch(
          `https://dog.ceo/api/breed/${subBreed}/${breedName}/images/random`
        );
        data = await response.json();
        updateDom(data);
        textBreed.textContent = `${
          breedName.charAt(0).toUpperCase() + breedName.slice(1)
        } ${subBreed.charAt(0).toUpperCase() + subBreed.slice(1)}`;
      } else if (dogBreeds[breed]) {
        const response = await fetch(
          `https://dog.ceo/api/breed/${breed}/images/random`
        );
        data = await response.json();
        updateDom(data);
        textBreed.textContent = breed;
      } else {
        alert("Breed not found");
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
    input.value = "";
  });
}
