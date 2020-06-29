const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;



describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2,3] for [1, 2, 3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it("should return [] for []", function() {
    assert.deepEqual(middle([]), []);
  });
  it("should return [1] for []", function() {
    assert.deepEqual(middle([1]), []);
  });
  it("should return [1,2] for []", function() {
    assert.deepEqual(middle([1,2]), []);
  });

});