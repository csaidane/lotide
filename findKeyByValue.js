const assertEqual = require("./assertEqual");



const findKeyByValue = function(obj , value) {
  let keys = Object.keys(obj);
  let output = undefined;

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === value) {
      output = keys[i];
    }
  }
  return output;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
