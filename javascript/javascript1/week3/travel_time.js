const travelInformation = {
  speed: 50, //in km/h
  destinationDistance: 432, //in km
};
function calculateTime(travelObject) {
  const time = travelObject.destinationDistance / travelObject.speed; // find time it takes to travel the distance in hours
  const hours = Math.floor(time); //whole hours
  const minutes = Math.round((time - hours) * 60); //fractional part of an hour converted into minutes
  return `${hours} hours and ${minutes} minutes.`;
}
const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
