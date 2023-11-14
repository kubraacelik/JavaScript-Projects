let number = Number(prompt("Enter the number : "));
let result = true;

//Not prime
for (let i = 2; i <= Math.floor(number / 2); i++) {
  if (number % i == 0) {
    result = false;
    break;
  }
}
if (result) {
  alert(number + " prime");
} else {
  alert(number + " not prime");
}
