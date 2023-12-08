//LOGIN KISMI
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

//EMPLOYEE KISMI

let tableData = [];
let userId;

function getUserId(enteruserName) {
  if ((enteruserName = "kübra")) {
    return 1;
  } else if ((enteruserName = "cihan")) {
    return 2;
  } else {
    return 3;
  }
}

// localStorage'da mevcut veri varsa alınacak
const storedData = localStorage.getItem("tableData");
if (storedData) {
  tableData = JSON.parse(storedData);
  updateTable();
}

// Veriyi localStorage'a kaydetme fonksiyonu
function saveDataToStorage() {
  localStorage.setItem("tableData", JSON.stringify(tableData));
}

function updateTable() {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  // Tabloyu temizle
  table.innerHTML = "";

  // Her bir veriyi tabloya ekle
  for (let i = 0; i < tableData.length; i++) {
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    // Hücrelere verileri ekle
    cell1.innerHTML = tableData[i].id;
    cell2.innerHTML = tableData[i].name;
    cell3.innerHTML = tableData[i].surname;
    cell4.innerHTML = tableData[i].sales;
    cell5.innerHTML = "Onay Bekliyor";
  }
}

// Formdaki verileri alan fonksiyon
function addContact() {
  //let userId;
  let name = document.getElementById("nameInput").value;
  let surname = document.getElementById("surnameInput").value;
  let sales = document.getElementById("salesAmount").value;

  // Giriş yapan kişiye göre userId'yi ayarla
  userId = getUserId(enteruserName);

  //verileri dizi içinde tutmam lazım
  let data = {
    id: userId,
    name: name,
    surname: surname,
    sales: sales,
  };

  tableData.push(data);

  // Veriyi localStorage'a kaydet
  saveDataToStorage();

  // Tabloyu güncelle
  updateTable();

  // Yeni bir tablo satırı oluştur
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  // Hücrelere verileri ekle
  cell1.innerHTML = userId;
  cell2.innerHTML = name;
  cell3.innerHTML = surname;
  cell4.innerHTML = sales;
  cell5.innerHTML = "";

  // Formu sıfırla
  document.getElementById("form").reset();
}

//logout butonu

function logOut() {
  window.open("index.html", "_self");
}

//MANAGER KISMI
