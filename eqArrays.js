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

module.exports = eqArrays;