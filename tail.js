const tail = function(array) {
  let x = [...array];
  x.splice(0,1);
  return x;
};

module.exports = tail;