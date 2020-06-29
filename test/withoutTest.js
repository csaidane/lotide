const without = require('../without');
const assert = require('chai').assert;


describe("#without", () => {
  it("returns [1]", () => {
    assert.strictEqual(without([1, 2, 3] , [2,3]), [1]);
  });
 
});
