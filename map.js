const eqArrays = require("./eqArrays");



const words = ["ground", "control", "to", "major", "tom"];
const assertArraysEqual = require('./assertArraysEqual');




const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;




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