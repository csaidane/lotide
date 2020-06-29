const assertEqual = require("./assertEqual");


const isLetter = function(str) {
  return str.length === 1 && str.match(/[a-z]/i);
};

const countLetters = function(sentence) {
  let input = sentence.toLowerCase();
  const output = {};
  let letter;
  for (let i = 0; i < input.length; i++) {
    if (isLetter(input.charAt(i))) {
      letter = input.charAt(i);
      if (output[letter]) {
        output[letter] += 1;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;