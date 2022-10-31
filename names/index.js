let country = require("../country/state/city/index.js");
let utilities = require("../utilities/utils/index.js");
const getPeopleInCity = (country) => {
  return utilities(country);
};
module.exports = getPeopleInCity;
