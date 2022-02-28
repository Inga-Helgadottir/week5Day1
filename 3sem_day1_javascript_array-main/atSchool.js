/*class Human {
  constructor(fname, lname, yearOfBirth) {
    this.fname = fname;
    this.lname = lname;
    this.yearOfBirth = yearOfBirth;
  }
  getYear = function (birthYear) {
    return birthYear - this.yearOfBirth;
  };
}

Human.prototype.writeToConsole = function () {
  console.log(2022 - this.yearOfBirth);
};

const steve = new Human("Steve", "Hanson", 1985).getYear(2022);

steve.writeToConsole("Hallo from here");

console.log(steve);*/

const person = {
  name: "Steve",
  age: 25,
  friends: [
    {
      name: "Brian",
      age: 36,
    },
    {
      name: "Joe",
      age: 22,
    },
    {
      name: "Michelle",
      age: 18,
    },
  ],
};

console.log(person.name);
console.log(person.age);

person.friends.map(function (el) {
  el.isOlder = el.age > person.age;
});

person.friends.forEach((friend) => {
  console.log(friend);
});

const arrayFunction = (num1, num2, num3) => {
  return num1 + num2 + num3;
};
