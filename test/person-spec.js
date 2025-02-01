const chai = require("chai")
const expect = chai.expect;

const Person = require("../problems/person");

describe("Person", () => {
    let abby;

    beforeEach (() => {
        abby = new Person("Abby", 26);
    })

    describe("properties", () => {
        it("should have to 'name' and 'age properties" , () => {
            expect(abby).to.have.all.keys("name", "age");
        })

        it("should set the 'name' and 'age' properties when a new word is created", () => {
            expect(abby).to.have.property("name");
            expect(abby).to.have.property("age");
        })
    })

})
