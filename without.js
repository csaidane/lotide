
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

const arrayRemove = function(arr, value) {
  return arr.filter(function(ele) {
    return ele !== value;
  });
};

const without = function(source, itemsToRemove) {
  let output = [...source];
  for (let i = 0; i < itemsToRemove.length; i++) {
    output = arrayRemove(output,itemsToRemove[i]);
  }
  return output;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1,2,3] , [3]) , [1,2]);
assertArraysEqual(without([1,2,3] , [2, 3]) , [1]);
assertArraysEqual(without([1,2,3] , [2, 3, 1]) , []);
assertArraysEqual(without([1,2,3] , [4,8,9,1]) , [2,3]);
assertArraysEqual(without(["ah", "on" , "est", "la "] , ["on"]) , ["ah", "est", "la "]);
assertArraysEqual(without(["ah", "on" , "est", "la "] , ["zbre", "on"]) , ["ah", "est", "la "]);
assertArraysEqual(without([] , ["zbre", "on"]) , []);
assertArraysEqual(without([] , []) , []);