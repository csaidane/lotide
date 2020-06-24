
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

const middle = function(array) {
  if (array.length === 0 || array.length === 1 || array.length === 2) {
    return [];
  }
  let output = [...array];
  if (array.length % 2 === 0) {
    let index = array.length / 2;
    output = output.slice(index - 1 , index + 1);
    return output;
  } else if (array.length % 2 === 1) {
    let index = Math.ceil(array.length / 2);
    output = output.slice(index - 1, index);
    return output;
  }
};

assertArraysEqual(middle([1, 2, 3]) , [2]);
assertArraysEqual(middle([1, 2, 3,4]) , [2,3]);
assertArraysEqual(middle([]) , []);
assertArraysEqual(middle([1, 2]) , []);
assertArraysEqual(middle([1]) , []);