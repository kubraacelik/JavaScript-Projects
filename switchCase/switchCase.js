let newLine = "\r\n";
let text =
  "1-Monday" +
  newLine +
  "2-Tuesday" +
  newLine +
  "3-Wednesday" +
  newLine +
  "4-Thursday" +
  newLine +
  "5-Friday" +
  newLine +
  "6-Saturday" +
  newLine +
  "7-Sunday" +
  newLine +
  "Please select a day : ";

let value = prompt(text);

switch (value) {
  case "1":
    console.log("on Monday");
    break;
  case "2":
    console.log("on Tuesday");
    break;
  case "3":
    console.log("on Wednesday");
    break;
  case "4":
    console.log("on Thursday");
    break;
  case "5":
    console.log("on Friday");
    break;
  case "6":
    console.log("on Saturday");
    break;
  case "7":
    console.log("on Sunday");
    break;
  default:
    console.log("Please enter a valid value.");
}
