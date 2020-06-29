const findKeyByValue = function(obj , value) {
  let keys = Object.keys(obj);
  let output = undefined;

  for (let i = 0; i < keys.length; i++) {
    if (obj[keys[i]] === value) {
      output = keys[i];
    }
  }
  return output;
};

module.exports = findKeyByValue;