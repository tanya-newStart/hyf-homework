fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((data) => displayAdvice(data))
  .catch((error) => console.log(error));

function displayAdvice(item) {
  const adviceText = document.getElementById("advice");
  adviceText.textContent = item.slip.advice;
}
