const chai = require("chai");
const expect = chai.expect;

const Triangle = require("../problems/triangle");

describe("triangle", () => {
    let t1;

    let t2;

    beforeEach(() => {
        t1 = new Triangle(3, 3, 3);

        t2 = new Triangle(3, 3, 9);
    });

    describe("constructor class", () => {
        it("should have 'side1', 'side2', and 'side3' properties", () => {
            expect(t1).to.have.all.keys("side1", "side2", "side3");
        });
        it("should set the all properties when a new triangle is created", () =>{
            expect(t1).to.have.property("side1");
            expect(t1).to.have.property("side2");
            expect(t1).to.have.property("side3");
        });
    });

    describe("getPerimeter function", () =>{
        it("should return sum of all three sides", () => {
            expect(t1.getPerimeter()).to.equal(9)
        });
    });

    describe("hasValidSideLengths function", () => {
        it("should return true if the sum of any two sides are greater than the remaining side", () => {
            expect(t1.hasValidSideLengths()).to.be.true;
        });
        it("should return false if the sum of any two sides are less than the remaining side", () => {
            expect(t2.hasValidSideLengths()).to.be.false;
        });
    });

    describe("validate function", () => {
        it("should add a 'isValid' property that equals true if 'hasValidSideLengths' is true", () => {
            t1.validate();

            expect(t1.isValid).to.equal(true);
        });
        it("should add a 'isValid' property that equals false if 'hasValidSideLengths' is false", () => {
            t2.validate();

            expect(t2.isValid).to.equal(false);
        });
    });

    describe("getValidTriangle static method", () => {
        
    })

})