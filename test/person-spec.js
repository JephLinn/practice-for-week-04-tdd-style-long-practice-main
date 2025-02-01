const chai = require("chai")
const expect = chai.expect;

const Person = require("../problems/person");

describe("Person", () => {
    let abby;

    beforeEach (() => {
        abby = new Person("Abby", 26);
        gail = new Person("Gail", 29);
    });

    describe("properties", () => {
        it("should have to 'name' and 'age properties" , () => {
            expect(abby).to.have.all.keys("name", "age");
        });

        it("should set the 'name' and 'age' properties when a new word is created", () => {
            expect(abby).to.have.property("name");
            expect(abby).to.have.property("age");
        });
    });

    describe("sayHello function", () => {
        it("should return a string with 'name' and greeting message", () => {
            expect(abby.sayHello()).to.equal("Abby says hello!");
        });
    });

    describe("visit function", () => {
        it("should return string stating this person visited the passed in person", () => {
            expect(abby.visit(gail)).to.equal("Abby visits Gail.");
        });
    });

    describe("switchVisit function", () => {
        it("should invoke visit() func from person2, use this person as arg", () => {
            expect(abby.switchVisit(gail)).to.equal("Gail visits Abby.");
        })
    })
})
