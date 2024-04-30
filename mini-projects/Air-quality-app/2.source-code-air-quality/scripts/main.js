import { pollutionScale } from "./pollutionScale.js"
const loader = document.querySelector(".loader")
const emojiLogo = document.querySelector(".emoji-logo")
const userInformation = document.querySelector(".user-information")

async function getPollutionData(){
  let responseData;
  try {
    const response = await fetch('http://api.airvisual.com/v2/nearest_city?key=2749c21a-c76b-482d-b024-2ffaedf14799')
    if(!response.ok) {
      throw new Error(`${response.status} Error, ${response.statusText}`)
    }
    responseData = await response.json()
  }
  catch(error){
    loader.classList.remove("active")
    emojiLogo.src = "./resources/browser.svg"
    userInformation.textContent = error.message
  }

  if(responseData){
    const aqi = responseData.data.current.pollution.aqius
    
    console.log(responseData)
    
    
    const sortedData = {
      city: responseData.data.city,
      aqi,
      ...pollutionScale.find(obj => aqi >= obj.scale[0] && aqi <= obj.scale[1])
    }
    populateUI(sortedData)
    pointerPlacement(aqi)
  }
}
getPollutionData()

const cityName = document.querySelector(".city-name")
const pollutionInfo = document.querySelector(".pollution-info")
const pollutionValue = document.querySelector(".pollution-value")
const header = document.querySelector("header")

function populateUI(data) {
  emojiLogo.src = `resources/${data.src}.svg`
  userInformation.textContent = `Here is ${data.city} situation.`
  cityName.textContent = data.city
  pollutionInfo.textContent = data.quality
  pollutionValue.textContent = data.aqi
  header.style.backgroundImage = data.background
  header.classList.add("active")
  loader.classList.remove("active")
}

const locationPointer = document.querySelector(".location-pointer")

function pointerPlacement(AQIValue){
  const parentWidth = locationPointer.parentElement.scrollWidth 
  // console.log(parentWidth)
  // console.log(AQIValue / 501)
  // console.log((AQIValue / 501) * parentWidth)
  locationPointer.style.transform = `translateX(calc(${(AQIValue / 501) * parentWidth}px - 50%)) rotate(180deg)` 
}