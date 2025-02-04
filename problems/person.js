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

  update(obj) {
    if (obj.name && obj.age) {
      this.name = obj.name;
      this.age = obj.age;
      return this;
    }
    else {
      throw TypeError("Provide obj with 'name' and 'age' properties.")
    }
  }

  tryUpdate(obj) {
  try  {
    this.update(obj);
    return true;
  } catch (error) {
    return false;
  }
  }

  static greetAll(arr) {
    if (Array.isArray(arr)) {
      let newArr = [];

      arr.forEach((person) => {
        newArr.push(person.sayHello())
      });
      return newArr
    }
    else {
      throw TypeError ("Must provide an array.")
    }
  }
}

module.exports = Person;