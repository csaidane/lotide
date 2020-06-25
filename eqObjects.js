const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(a1, a2) {
  if (a1.length !== a2.length) {
    return false;
  } else {
    for (let i = 0; i < a1.length; i++) {
      if (a1[i] !== a2[i]) {
        return false;
      }
    }
    return true;
  }
};

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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);