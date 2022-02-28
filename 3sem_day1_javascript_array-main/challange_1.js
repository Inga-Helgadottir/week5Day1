////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

*/
const Mark = {
  height: 1.69,
  mass: 78,
};
const John = {
  height: 1.95,
  mass: 92,
};

function BMICalc(mass, height) {
  let BMI = (mass / height ** 2) * 10000;
  return BMI.toFixed(2);
}

console.log(BMICalc(Mark.height, Mark.mass));
console.log(BMICalc(John.height, John.mass));
let markHigherBMI =
  BMICalc(John.height, John.mass) < BMICalc(Mark.height, Mark.mass);
console.log(markHigherBMI);

//other stuff
let num1 = 10;
let num2 = 40;
let isHigher = num1 < num2 ? "num1 is smaller" : "num2 is smaller";
console.log(isHigher);

let testing = `testing ${num1} this`;
console.log(testing);
