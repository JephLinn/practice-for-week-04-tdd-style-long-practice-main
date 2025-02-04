const chai = require("chai")
const expect = chai.expect;

const Person = require("../problems/person");

describe("Person", () => {
    let abby;
    let gail;

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
        });
    });

    describe("update function", () => {
        context("if arg isn't an object", () => {
            it("should throw typeError", () => {
                expect(() => abby.update("test").to.throw(TypeError))
            });
        });
        context("if obj doesn't have correct keys", () => {
            it("should throw typeError", () => {
                expect(() => abby.update({job: clerk}).to.throw(TypeError))
            });
        });
        context("if arg has correct keys", () => {
            it("should update properties", () =>{
                let coolPerson = new Person("mai", 32); 
                let test1 = coolPerson.update({ name: "lulu", age: 57 });

                expect(test1).to.deep.equal({name: "lulu", age: 57});
            });
        });
    });

    describe("tryUpdate function", () => {
        context("if invoked successfully", () => {
            it("should return true and use update() function", () => {
                let coolPerson = new Person("mai", 32); 
                let test1 = coolPerson.tryUpdate({ name: "lulu", age: 57 });

                expect(test1).to.be.true;
                expect(coolPerson).to.deep.equal({name: "lulu", age: 57});
            });
        });
        context("if not invoked successfully", () => {
            it("should return false", () => {
                let coolPerson = new Person("mai", 32); 
                let test1 = coolPerson.tryUpdate({});

                expect(test1).to.be.false;
            });
        });
    });

    describe("greetAll static method", () => {
        it("should return sayHello() for each person in array", () => {
            let personArray = [abby, gail];

            expect(Person.greetAll(personArray)).to.deep.equal(["Abby says hello!", "Gail says hello!"])
        });
        it("should throw TypeError if not an array", () => {
            expect(() => Person.greetAll(7)).to.throw(TypeError)
        })
    })
});
