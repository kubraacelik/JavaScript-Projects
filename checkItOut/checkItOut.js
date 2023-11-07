let name = prompt("Please enter your name : ");
let tckn = prompt("Please enter your tckn : ");

function checkItOut(name, tckn) {
  if (name != "") {
    if (tckn.length == 11) {
      console.log("Name and tckn entered without any problems.");
    } else {
      console.log("please enter your tckn 11 digits.");
    }
  } else {
    console.log("please don't leave the name field blank");
  }
}

checkItOut(name, tckn);
