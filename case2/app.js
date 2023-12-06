let users = [
  {
    userName: "kübra",
    password: "çelik",
  },
  {
    userName: "cihan",
    password: "tamyıldırım",
  },

  {
    userName: "kayra",
    password: "güngör",
  },
  {
    userName: "ezgi",
    password: "dolma",
  },
  {
    userName: "murat",
    password: "durmuş",
  },
];

let manager = [
  {
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
