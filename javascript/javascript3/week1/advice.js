fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => displayAdvice(data))
  .catch((error) => console.log(error));

function displayAdvice(item) {
  const adviceText = document.getElementById("advice");
  adviceText.textContent = item.slip.advice;
}

fetch(
  "https://raw.githubusercontent.com/tanya-newStart/tanya-newStart.github.io/main/data.json"
)
  .then((response) => response.json())
  .then((data) => {
    const combinedData = combineData(
      [...data.imagesWeather, ...data.images],
      [...data.animals, ...data.weather]
    );
    console.log(combinedData);
  });

function combineData(images, words) {
  return [
    ...images.map((image) => ({
      ...image,
      type: "image",
      data: image.url,
      imgBackSrc: image["back-cover"],
    })),
    ...words.map((word) => ({
      ...word,
      type: "word",
      data: word.word,
      imgBackSrc: "./assets/back.jpg",
    })),
  ];
}
