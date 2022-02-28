////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

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
  BMICalc(John.height, John.mass) < BMICalc(Mark.height, Mark.mass)
    ? `Mark's BMI (${BMICalc(Mark.height, Mark.mass)}) is higher than John's!`
    : `John's BMI (${BMICalc(John.height, John.mass)}) is higher than Mark's!`;

console.log(markHigherBMI);
/*
let markHigherBMI =
  BMICalc(John.height, John.mass) < BMICalc(Mark.height, Mark.mass)
    ? "Mark's BMI is higher than John's!"
    : "John's BMI is higher than Mark's!";*/
