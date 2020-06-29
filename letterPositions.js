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


module.exports = letterPositions;