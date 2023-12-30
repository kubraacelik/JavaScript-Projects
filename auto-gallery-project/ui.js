// Arayüz işlemlerini gerçekleştireceğiz

function UI() {}

UI.prototype.addCarToUI = function (newCar) {
  /*
      <!-- <tr>
              <td><img src="" class="img-fluid img-thumbnail"></td>
              <td></td>
              <td></td>
              <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
          </tr> -->
      <!-- <tr>
              <td><img src="" class="img-fluid img-thumbnail"></td>
              <td></td>
              <td></td>
              <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
          </tr> --> */

  //Bu kısım sayesinde "Araç Ekleyin" butonu çalışacak
  const carList = document.getElementById("cars");

  //üstüne ilave olacağı için += yaptık
  carList.innerHTML += ` 

        <tr>
            <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
            <td>${newCar.title}</td>
            <td>${newCar.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>

        `;
};

// Veri girince title, price, url'de yazılı olanlar silinsin

UI.prototype.clearInputs = function (element1, element2, element3) {
  element1.value = "";
  element2.value = "";
  element3.value = "";
};

UI.prototype.displayMessages = function (message, type) {
  const cardBody = document.querySelector(".card-body");

  // Alert div'ini oluşturma

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;

  cardBody.appendChild(div);

  setTimeout(function () {
    //uyarı mesajı 2 sn sonra gidecek
    div.remove();
  }, 2000);
};

//Sayfa yenilenince veriler Local Storage'den geri geliyor
UI.prototype.loadAllCars = function (cars) {
  const carList = document.getElementById("cars");

  cars.forEach(function (car) {
    carList.innerHTML += ` 

        <tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>

        `;
  });
};

// Aracı Sil butonuna basınca o satır gidecek
UI.prototype.deleteCarFromUI = function (element) {
  element.parentElement.parentElement.remove(); //td'den tr'ye geçiş yapıp silecek
};

UI.prototype.clearAllCarsFromUI = function () {
  const carList = document.getElementById("cars");

  // 1. Yöntem = yavaş çalışıyor
  // carList.innerHTML = "";

  while (carList.firstElementChild !== null) {
    //çocuk olduğu sürece
    carList.firstElementChild.remove(); // ilk çocuğu her seferinde sil, eleman kalmasın
  }
};
