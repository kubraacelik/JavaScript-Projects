let midterm1 = Number(prompt("Enter your midterm 1 grade : "));
let midterm2 = Number(prompt("Enter your midterm 2 grade : "));
let final = Number(prompt("Enter your final grade : "));

let average = midterm1 * 0.3 + midterm2 * 0.3 + final * 0.4;

if (average >= 35) {
  alert("You have successfully passed the course. Average :  " + average);
} else {
  alert("You failed the class. Average :  " + average);
}
