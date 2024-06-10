document.addEventListener("DOMContentLoaded", domLoaded);
const image = document.getElementById("dog-breed");
let loading = true;

function domLoaded() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((photos) => {
      return photos.json();
    })
    .then((data) => updateDom(data))
    .catch((error) => console.log("Something went wrong", error))
    .finally(() => (loading = false));

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((breeds) => {
      return breeds.json();
    })
    .then((data) => updateBreed(data));
}
function updateDom(photos) {
  image.innerHTML = "";
  const dogImage = document.createElement("img");
  dogImage.src = photos.message;
  image.appendChild(dogImage);
}

function updateBreed(breeds) {
  const userInput = document.createElement("input");
  const submitBtn = document.createElement("button");

  submitBtn.type = "submit";
  userInput.type = "text";
  const dogBreeds = breeds.message;
  console.log(dogBreeds);
}
setInterval(domLoaded, 2000);
