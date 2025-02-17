const chai = require("chai");
const expect = chai.expect;

const { Triangle, Scalene} = require("../problems/triangle");



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
        it("should return a list of valid triangles", () => {
            let t3 = new Triangle(4, 4, 6);

            let tArr = [t1, t2, t3];

            expect(Triangle.getValidTriangles(tArr)).to.deep.equal([t1, t3]);
        });
    });

});

describe("Scalene", () => {
    let s1;

    beforeEach(() => {
        s1 = new Scalene(2, 4, 6);
    });

    describe("Scalene child Class", () => {
        it("should be a child of the Triangle class", () => {
            expect(s1).to.be.instanceOf(Triangle);
        });
        it("should set the all properties when a new triangle is created", () =>{
            expect(s1).to.have.property("side1");
            expect(s1).to.have.property("side2");
            expect(s1).to.have.property("side3");
        });
        it("should have IsValidTriangle propertry", () => {
            expect(s1.isValidTriangle).to.be.true;
        });
    });

    describe("isScalene method", () => {
        it("should return 'true' if all sides have different lengths", () => {
            expect(s1.isScalene()).to.be.true;
        });
        it("should return false is any two sides are equal", () => {
            let sc1 = new Scalene(3, 3, 4);
            let sc2 = new Scalene(3, 4, 3);
            let sc3 = new Scalene(4, 3, 3);

            expect(sc1.isScalene()).to.be.false;
            expect(sc2.isScalene()).to.be.false;
            expect(sc3.isScalene()).to.be.false;
        })
    })
})