let users = [
  {
    userId: 1,
    userName: "kübra",
    password: "çelik",
  },
  {
    userId: 2,
    userName: "cihan",
    password: "tamyıldırım",
  },
  {
    userId: 3,
    userName: "erkan",
    password: "çetiner",
  },
];

let enteruserName;
let enterPassword;
let i;

function checkItOut() {
  enteruserName = document.querySelector("#userName").value;
  enterPassword = document.querySelector("#password").value;

  for (i of users) {
    if (i.userName == enteruserName && i.password == enterPassword) {
      return true;
    }
  }
}

function entryConfirmation() {
  checkItOut();
  if (enteruserName == "erkan" && enterPassword == "çetiner") {
    window.open("manager.html", "_self");
  } else if (checkItOut()) {
    window.open("employee.html", "_self");
  } else {
    alert("Incorrect Username or Password");
  }
}
