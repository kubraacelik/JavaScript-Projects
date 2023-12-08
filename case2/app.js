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

if ((enteruserName = "kübra")) {
  userId = 1;
} else if ((enteruserName = "cihan")) {
  userId = 2;
} else {
  userId = 3;
}

// Formdaki verileri alan fonksiyon
function addContact() {
  //let userId;
  let name = document.getElementById("nameInput").value;
  let surname = document.getElementById("surnameInput").value;
  let sales = document.getElementById("salesAmount").value;

  //verileri dizi içinde tutmam lazım
  let data = {
    id: userId,
    name: name,
    surname: surname,
    sales: sales,
  };

  tableData.push(data);

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

//Satır güncelleme fonksiyonu
function updateRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  var name = cells[0].innerHTML;
  var surname = cells[1].innerHTML;
  var sales = cells[2].innerHTML;

  var nameInput = document.getElementById("nameInput").value;
  var surnameInput = document.getElementById("surnameInput").value;
  var salesAmount = document.getElementById("salesAmount").value;

  document.getElementById("nameInput").value = name;
  document.getElementById("surnameInput").value = surname;
  document.getElementById("salesAmount").value = sales;
  // document.getElementById("idInput").value = id;

  cells[1].innerHTML = nameInput;
  cells[2].innerHTML = surnameInput;
  cells[3].innerHTML = salesAmount;
}

//Satır silme fonksiyonu
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.remove();
}

// Etiketlere çift tıklayınca tabloyu güncelleyen fonksiyon
function renderTable() {
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  tableData.forEach(function (data) {
    var newRow = table.insertRow(table.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);

    cell1.innerHTML = data.userId;
    cell2.innerHTML = data.name;
    cell3.innerHTML = data.surname;
    cell4.innerHTML = data.sales;
    cell5.innerHTML = "";
  });
}

// Adları sıralama fonksiyonu
function sortTable(column) {
  tableData.sort((a, b) => {
    if (column === "name") {
      return a.name.localeCompare(b.name);
    } else if (column === "surname") {
      return a.surname.localeCompare(b.surname);
    } else if (column === "sales") {
      return a.sales.localeCompare(b.sales);
    } else {
      return a[column] - b[column];
    }
  });
  renderTable();
}

//logout butonu

function logOut() {
  window.open("index.html", "_self");
}

//MANAGER KISMI
