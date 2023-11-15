let tableData = [];

// Formdaki verileri al
function addContact() {
  var id = Math.random() * Math.random() * 100;
  var name = document.getElementById("nameInput").value;
  var surname = document.getElementById("surnameInput").value;
  var age = document.getElementById("ageInput").value;
  var email = document.getElementById("emailInput").value;

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
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.remove();
}
