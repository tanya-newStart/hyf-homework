const pollutionScale = [
  {
    scale: [0, 50],
    quality: "Good",
    src: "happy",
    background: "linear-gradient(to right, #45B649, #DCE35B)",
  },
  {
    scale: [51, 100],
    quality: "Moderate",
    src: "thinking",
    background: "linear-gradient(to right, #F3F9A7, #CAC531)",
  },
  {
    scale: [101, 150],
    quality: "Unhealthy",
    src: "unhealthy",
    background: "linear-gradient(to right, #F16529, #E44D26)",
  },
  {
    scale: [151, 200],
    quality: "Bad",
    src: "bad",
    background: "linear-gradient(to right, #ef473a, #cb2d3e)",
  },
  {
    scale: [201, 300],
    quality: "Very bad",
    src: "mask",
    background: "linear-gradient(to right, #8E54E9, #4776E6)",
  },
  {
    scale: [301, 500],
    quality: "Terrible",
    src: "terrible",
    background: "linear-gradient(to right, #7a2828, #a73737)",
  },
];
const loader = document.querySelector(".loader");
const emojiLogo = document.querySelector(".emoji-logo");
const userInformation = document.querySelector(".user-information");
async function getPollutionData() {
  const response = await fetch(
    `http://api.airvisual.com/v2/nearest_city?key=695cbe0c-94b5-4b9d-a178-d57e74ba7a86`
  );
  const responseData = await response.json();
  const aqi = responseData.data.current.pollution.aqius;
  console.log(responseData);
  const sortedData = {
    city: responseData.data.city,
    aqi: aqi,
    ...pollutionScale.find((obj) => aqi >= obj.scale[0] && aqi <= obj.scale[1]),
  };
  populateUI(sortedData);
  console.log(sortedData);
}
const cityName = document.querySelector(".city-name");
const pollutionInfo = document.querySelector(".pollution-info");
const pollutionValue = document.querySelector(".pollution-value");
const header = document.querySelector("header");

function populateUI(data) {
  emojiLogo.src = `resources/${data.src}.svg`;
  userInformation.textContent = `Here is ${data.city} situation`;
  cityName.textContent = data.city;
  pollutionInfo.textContent = data.quality;
  pollutionValue.textContent = data.aqi;
}

getPollutionData();
