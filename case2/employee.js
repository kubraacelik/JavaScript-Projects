let tableData = [];

// Formdaki verileri alan fonksiyon
function addContact() {
  var id = Math.floor(Math.random() * 10000) + 1;
  var name = document.getElementById("nameInput").value;
  var surname = document.getElementById("surnameInput").value;
  var age = document.getElementById("ageInput").value;
  var email = document.getElementById("emailInput").value;

  //verileri dizi içinde tutmam lazım
  let data = {
    id: id,
    name: name,
    surname: surname,
    age: age,
    email: email,
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
  var cell6 = newRow.insertCell(5);

  // Hücrelere verileri ekle
  cell1.innerHTML = id;
  cell2.innerHTML = name;
  cell3.innerHTML = surname;
  cell4.innerHTML = age;
  cell5.innerHTML = email;
  cell6.innerHTML =
    '<button onclick="updateRow(this)">Güncelle</button> <button onclick="deleteRow(this)">Sil</button>';

  // Formu sıfırla
  document.getElementById("form").reset();
}

function updateRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  var id = cells[0].innerHTML;
  var name = cells[1].innerHTML;
  var surname = cells[2].innerHTML;
  var age = cells[3].innerHTML;
  var email = cells[4].innerHTML;

  var nameInput = document.getElementById("nameInput").value;
  var surnameInput = document.getElementById("surnameInput").value;
  var ageInput = document.getElementById("ageInput").value;
  var emailInput = document.getElementById("emailInput").value;

  document.getElementById("nameInput").value = name;
  document.getElementById("surnameInput").value = surname;
  document.getElementById("ageInput").value = age;
  document.getElementById("emailInput").value = email;
  // document.getElementById("idInput").value = id;

  cells[1].innerHTML = nameInput;
  cells[2].innerHTML = surnameInput;
  cells[3].innerHTML = ageInput;
  cells[4].innerHTML = emailInput;
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
    var cell6 = newRow.insertCell(5);

    cell1.innerHTML = data.id;
    cell2.innerHTML = data.name;
    cell3.innerHTML = data.surname;
    cell4.innerHTML = data.age;
    cell5.innerHTML = data.email;
    cell6.innerHTML =
      '<button onclick="updateRow(this)">Güncelle</button> <button onclick="deleteRow(this)">Ekle</button>';
  });
}

// Adları sıralama fonksiyonu
function sortTable(column) {
  tableData.sort((a, b) => {
    if (column === "name") {
      return a.name.localeCompare(b.name);
    } else if (column === "surname") {
      return a.surname.localeCompare(b.surname);
    } else if (column === "age") {
      return a.age - b.age;
    } else if (column === "email") {
      return a.email.localeCompare(b.email);
    } else {
      return a[column] - b[column];
    }
  });
  renderTable();
}
