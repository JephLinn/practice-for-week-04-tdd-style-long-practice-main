const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");


describe("returnsThree function", () => {
    it("should return 3", () => {
      expect(returnsThree()).to.equal(3);
    });
  });

  describe("reciprocal function", () => {
    context("if arg is within valid range", () => {
        it("should return the reciprocal number", () => {
            let test1 = reciprocal(4);
            let test2 = reciprocal(1/3);
            let test3 = reciprocal(1.38);
    
            expect(test1).to.equal(.25);
            expect(test2).to.equal(3);
            expect(test3).to.equal(.7246376811594204);
        })
    })

    context("if arg isn't within range", () => {
        it("should throw a RangeError", () => {
            expect(() => reciprocal(4000000).to.throw(RangeError));
            expect(() => reciprocal(-4).to.throw(RangeError));
        })
    })
    
  })