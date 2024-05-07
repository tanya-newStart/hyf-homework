const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function calculateTime(travelObject) {
  const time = travelObject.destinationDistance / travelObject.speed;
  const hours = Math.floor(time);
  const minutes = Math.round((time - hours) * 60);
  return `${hours} hours and ${minutes} minutes.`;
}
const travelTime = calculateTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes
