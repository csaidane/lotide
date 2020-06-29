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

module.exports = without;