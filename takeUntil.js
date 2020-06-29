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