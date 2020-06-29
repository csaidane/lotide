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

module.exports = middle;

