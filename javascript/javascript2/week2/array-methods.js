/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = ["Parking", "Elevator", "Altan", "Have", "Husdyr"];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
}

//
// Your job is to create the filterListings function.
// The function should support these filters: type, facilities, price , hasGarden and size. Use arrow functions!+

function filterListings(listings, type, value) {
  if (type === "type") {
    return (listings = listings.filter((listing) => listing.type === value));
  } else if (type === "facilities") {
    return (listings = listings.filter((listing) =>
      listing.facilities.includes(value)
    ));
  } else if (type === "price") {
    return (listings = listings.filter((listing) => listing.price >= value));
  } else if (type === "hasGarden") {
    return (listings = listings.filter(
      (listing) => listing.hasGarden === value
    ));
  } else if (type === "size") {
    return (listings = listings.filter((listing) => listing.size >= value));
  }
}

const listings = generateListings(20);

const farmListings = filterListings(listings, "type", "Farm");
const priceListings = filterListings(listings, "price", 1000);
const hasGardenListings = filterListings(listings, "hasGarden", true);
const sizeListings = filterListings(listings, "size", 100);
const facilitiesListings = filterListings(listings, "facilities", "Parking");

//combine three filters above
const combinedListings = filterListings(
  filterListings(filterListings(listings, "type", "Farm"), "price", 1000),
  "hasGarden",
  true
);

console.log(combinedListings);
