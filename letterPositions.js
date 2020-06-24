
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


const isLetter = function(str) {
  return str.length === 1 && str.match(/[a-z]/i);
};



const letterPositions = function(sentence) {
  const output = {};
  let input = sentence.toLowerCase();
  let letter;
  let position;
  for (let i = 0; i < sentence.length; i++) {
    if (isLetter(input.charAt(i))) {
      letter = input.charAt(i);
      position = i;
      if (output[letter]) {
        output[letter].push(position);
      } else {
        output[letter] = [position];
      }
    }
  }
  return output;
};

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);

