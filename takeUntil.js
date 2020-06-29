const eqArrays = require("./eqArrays");


const assertArraysEqual = require('./assertArraysEqual');







const takeUntil = function(array, callback) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      output.push(array[i]);
    } else {
      break;
    }
  }
  return output;
};

module.exports = takeUntil;





const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
