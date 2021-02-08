//Requiring libraries needed for assertion
const chai = require('chai');
const { assert } = chai;

//Requiring the js file for test
const factorial = require('../factorial');

/*describe() block:- takes in 2 parameters -the description and 
the function that will contain the tests.*/

/*it() block:- conatins the test code*/

describe("Computing factorial using factorial.js  \n", () => {
  //Valid inputs
  describe("Valid inputs", () => {
    it("Factorial 3 should return 6", () => {
      assert.equal(factorial(3), 6)
    })
    it("Factorial for 5 should return 120", () => {
      assert.equal(factorial(5), 120)
    })
    it("Factorial for 0 should return 1 \n", () => {
      assert.equal(factorial(0), 1)
    })
  })
  //Invalid inputs
  describe("Invalid inputs", () => {
    it("Undefined, number should be >=1", () => {
      assert.equal(factorial(-5), "undefined")
    })
    it("Undefined, function only takes in numbers", () => {
      assert.equal(factorial('TDD'), "undefined")
    })
  })
})