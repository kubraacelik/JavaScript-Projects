let number = prompt("Enter the number : ");
let total = 0;

for (let i = 0; i < number.length; i++) {
  let figure = number.charAt(i);
  total += figure * figure * figure;
}

if (Number(number) == total) {
  alert("Number is Armstrong");
} else {
  alert("Number isn't Armstrong");
}
