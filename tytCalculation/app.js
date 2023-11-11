let turkishTrue,
  turkishFalse = 0;
let mathTrue,
  mathFalse = 0;
let socialTrue,
  socialFalse = 0;
let scienceTrue,
  scienceFalse = 0;

let newLine = "\r\n";
let message =
  "Welcome to TYT Score Calculator" +
  newLine +
  "1-Calculate Points" +
  newLine +
  "2-Exit";

let score = 0;
let schoolScore = 0;

let secim = prompt(message);

switch (secim) {
  case "1":
    schoolScore = Number(prompt("Enter Your School Score : "));
    turkishTrue = Number(prompt("Number of Turkish Correct : "));
    turkishFalse = Number(prompt("Number of Turkish False : "));

    mathTrue = Number(prompt("Number of Math Correct : "));
    mathFalse = Number(prompt("Number of Math False : "));

    socialTrue = Number(prompt("Number of Social Correct : "));
    socialFalse = Number(prompt("Number of Social False : "));

    scienceTrue = Number(prompt("Number of Science Correct : "));
    scienceFalse = Number(prompt("Number of Science False : "));

    // 4 wrongs will lead to 1 right
    let trueNumb = turkishTrue + mathTrue + socialTrue + scienceTrue;
    let falseNumb = turkishFalse + mathFalse + socialFalse + scienceFalse;
    let remainingTrue = trueNumb - falseNumb / 4;
    score = remainingTrue * 4 + 100 + schoolScore;
    alert("TYT Score : " + score);
    break;

  case "2":
    alert("Exit from the App");
    break;

  default:
    alert("Please Enter Value in Valid Range");
    break;
}
