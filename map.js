const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const results1 = map(words, word => word[0]);
console.log(results1);


const twice = function(x) {
  return x * 2;
};
const longueur = function(s) {
  return s.length;
};

const addOne = function(y) {
  return y + 1;
};

assertArraysEqual(map([1,2,3], twice), [2,4,6]);
assertArraysEqual(map(["allo","oui"], longueur), [4,3]);
assertArraysEqual(map([1,2,3], addOne), [2,3,4]);