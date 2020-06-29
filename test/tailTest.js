const tail = require('../tail');
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;


describe("#tail", () => {
  it("returns [2,3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });
  it("returns [] for ['5']", () => {
    assert.deepEqual(tail(['5']), []);
  });
  it("should return ['lighthouse', 'labs'] for ['Hello', 'Lighthouse', 'Labs']", function() {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse","Labs"]);
  });


});