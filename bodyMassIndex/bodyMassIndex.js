let weight = Number(prompt("Please enter your weight : "));
let height = Number(prompt("Enter your height in meterst : "));

let bodyMassIndex = weight / (height * 2);

if (bodyMassIndex < 18.5) {
  console.log("You are under the ideal weight " + bodyMassIndex);
} else if (18.5 < bodyMassIndex < 24.9) {
  console.log("You are at an ideal weight " + bodyMassIndex);
} else if (25.9 < bodyMassIndex < 29.9) {
  console.log("You are above the ideal weight " + bodyMassIndex);
} else if (30 < bodyMassIndex < 39.9) {
  console.log("You are far above the ideal weight (obese) " + bodyMassIndex);
} else {
  console.log(
    "You are far above the ideal weight (morbidly obese) " + bodyMassIndex
  );
}
