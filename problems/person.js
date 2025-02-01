class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `${this.name} says hello!`
  }

  visit(person2) {
    return `${this.name} visits ${person2.name}.`
  }

  switchVisit(person2) {
    return person2.visit(this)
  }
}

module.exports = Person;