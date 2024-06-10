document.addEventListener("DOMContentLoaded", domLoaded);
const images = document.getElementById("grid-container");
let loading = true;

function domLoaded() {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((photos) => {
      return photos.json();
    })
    .then((data) => data.slice(0, 10))
    .then((data) => updateDom(data))
    .catch((error) => console.log("Something went wrong", error))
    .finally(() => (loading = false));
}

function updateDom(photos) {
  images.innerHTML = "";
  console.log(photos);
  photos.forEach((photo) => {
    const item = document.createElement("div");
    item.innerHTML = `<p>${photo.title}</p><a href="${photo.url}" target ="_blank"><img src="${photo.thumbnailUrl}"></a>`;
    images.append(item);
  });
}
