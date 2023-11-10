// Formdaki veriler al
function addContact() {
  var name = document.getElementById("nameInput").value;
  var surname = document.getElementById("surnameInput").value;
  var age = document.getElementById("ageInput").value;
  var email = document.getElementById("emailInput").value;

  // Yeni bir tablo satırı oluştur
  var table = document.getElementById("table").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.rows.length);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

  // Hücrelere verileri ekle
  cell1.innerHTML = name;
  cell2.innerHTML = surname;
  cell3.innerHTML = age;
  cell4.innerHTML = email;
  cell5.innerHTML =
    '<button onclick="updateRow(this)">Güncelle</button> <button onclick="deleteRow(this)">Sil</button>';

  // Formu sıfırla
  document.getElementById("form").reset();
}
function updateRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");

  var name = cells[0].innerHTML;
  var surname = cells[1].innerHTML;
  var age = cells[2].innerHTML;
  var email = cells[3].innerHTML;

  document.getElementById("nameInput").value = name;
  document.getElementById("surnameInput").value = surname;
  document.getElementById("ageInput").value = age;
  document.getElementById("emailInput").value = email;

  // Satırın tıklanabilirliği
  row.addEventListener("click", function () {
    cells[0].innerHTML = document.getElementById("nameInput").value;
    cells[1].innerHTML = document.getElementById("surnameInput").value;
    cells[2].innerHTML = document.getElementById("ageInput").value;
    cells[3].innerHTML = document.getElementById("emailInput").value;
  });
}
function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.remove();
}
