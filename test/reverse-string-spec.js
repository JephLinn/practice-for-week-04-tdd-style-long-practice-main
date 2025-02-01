const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string")

describe("Word", function () {
    let word;
    
    beforeEach(() => {
        word = "hadoken";
    })
    
    describe("reverseString", function () {
        it("should return reverse the string", function () {
            const test1 = reverseString(word)
    
            expect(test1).to.equal("nekodah")
        })
    })

    describe("Throw TypeError", function () {
        it("should throw a typeError if not a string", function() {
            expect(() => reverseString([]).to.throw(TypeError));
            expect(() => reverseString(4).to.throw(TypeError));
            expect(() => reverseString({}).to.throw(TypeError));
        })
    })
  });




