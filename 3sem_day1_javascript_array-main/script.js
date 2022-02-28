/*
EXCERCISES
*/

// 1)
var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];

// 2)
// TODO: Create a new array called all
var all = boys.concat(girls);
console.log(all);

// 3)
// TODO: Create a comma-separated string
console.log(all.join(", "));

// TODO: Create a hyphen (-) separated string
console.log(all.join(" - "));

// 4)
// TODO: Add the names Lone and Gitte
all.push("Lone", "Gitte");
console.log(all);

// 5)

// TODO: Add the names, Hans and Kurt
all.push("Hans", "Kurt");
console.log(all);

// 6)
// TODO: Remove the first name
all.shift();
console.log(all);

// 7)
// TODO: Remove the last name
all.pop();
console.log(all);

// 8)
// TODO: Remove Ole and Janne from the middle of the array
all.splice(0, 2); //fix later
console.log(all);

// 9)
// TODO: Reverse the all array, so that the girls comes first
all.reverse();
console.log(all);

// 10)
// TODO: Sort the array
all.sort();
console.log(all);

// 11)
// TODO: Write a user-defined sort method
function lengthOrder() {
  for (var i = 0; i < all.length; i++) {
    all[i] = all[i].toLowerCase();
  }
  all.sort();
}
lengthOrder();
console.log(all);

// 12)
// TODO: Convert names to uppercase

for (var i = 0; i < all.length; i++) {
  all[i] = all[i].toUpperCase();
}
console.log(all);

// 13)
// TODO: new array with names that starts with l or L
var lNames = [];
all.forEach((l) => {
  if (l.charAt(0) == "L" || l.charAt(0) == "l") {
    lNames.push(l);
  }
});
console.log(lNames);
