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
            let arr = [];

            let num = 4;

            let obj = {};

            const test1 = reverseString(arr);

            const test2 = reverseString(num);

            const test3 = reverseString(obj);

            expect(() => test1.to.throw(TypeError));
            expect(() => test2.to.throw(TypeError));
            expect(() => test3.to.throw(TypeError));
        })
    })
  });




