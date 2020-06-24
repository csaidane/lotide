
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

assertArraysEqual([1, 2, 3] , [1, 2, 3]);
assertArraysEqual([] , [1, 2, 3]);
assertArraysEqual([] , []);
assertArraysEqual([1, 2] , [1, 2, 3]);