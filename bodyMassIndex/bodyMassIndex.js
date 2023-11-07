let weight = Number(prompt("Please enter your weight : "));
let height = Number(prompt("Enter your height in meterst : "));

let bodyMassIndex = weight / (height * 2);

if (bodyMassIndex < 18.5) {
  alert("You are under the ideal weight " + Math.floor(bodyMassIndex));
} else if (18.5 < bodyMassIndex < 24.9) {
  alert("You are at an ideal weight " + Math.floor(bodyMassIndex));
} else if (25.9 < bodyMassIndex < 29.9) {
  alert("You are above the ideal weight " + Math.floor(bodyMassIndex));
} else if (30 < bodyMassIndex < 39.9) {
  alert(
    "You are far above the ideal weight (obese) " + Math.floor(bodyMassIndex)
  );
} else {
  alert(
    "You are far above the ideal weight (morbidly obese) " +
      Math.floor(bodyMassIndex)
  );
}
