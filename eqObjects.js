const eqArrays = require("./eqArrays");


//this function must exist because arrays have a typof Object
// this covers the case where (typeof arr1 === typeof obj1) would evaluate to true when we want it to evaluate to false
const typeCheck = function(value1, value2) {
  if (Array.isArray(value1) && !Array.isArray(value2)) {
    return false;
  } else if (typeof value1 !== typeof value2) {
    return false;
  } else {
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  //if there isn't the same number of keys, no need to go further
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    //if the type of values doesnt match, no need to go further
    if (typeCheck(object1[keys1[i]],object2[keys1[i]]) === false) {
      return false;
    }
    //We are now sure both values have the same type. We check for equality in whatever way corresponds to the value type.
    if (Array.isArray(object1[keys1[i]])) {
      if (!eqArrays(object1[keys1[i]], object2[keys1[i]])) {
        return false;
      }
    } else if (typeof object1[keys1[i]] === 'object') {
      console.log("type object, we let this slide until the recursion lecture :) ");
    } else {
      if (object1[keys1[i]] !== object2[keys1[i]]) {
        return false;
      }
    }
  }
  return true;
};


module.exports = eqObjects;