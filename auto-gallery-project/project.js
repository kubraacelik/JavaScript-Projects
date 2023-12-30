// Projenin Ana Js Dosyası

const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]; //2 adet card-body mevcut 2. olanı al
const clear = document.getElementById("clear-cars");

// UI Objesini Başlatma

const ui = new UI();

const storage = new Storage();

// Tüm Eventleri Yükleme
// addEventListener yöntemi, bir kullanıcı bir düğmeyi tıkladığında,
// çağrılacak işlevleri ayarlamaya olanak tanır.

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addCar); //submit'e basınca addCar fonksiyonu çalışsın

  document.addEventListener("DOMContentLoaded", function () {
    let cars = storage.getCarsFromStorage();
    ui.loadAllCars(cars);
  });

  cardBody.addEventListener("click", deleteCar);

  clear.addEventListener("click", clearAllCars);

  document
    .getElementById("car-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Form submit işlemini durdur
    });
}

function addCar(e) {
  const title = titleElement.value;
  const price = priceElement.value;
  const url = urlElement.value;

  if (title === "" || price === "" || url === "") {
    ui.displayMessages("Tüm alanları doldurunuz...", "danger");
  } else {
    // yeni araç

    const newCar = new Car(title, price, url);

    ui.addCarToUI(newCar); // arayüze araç ekleme yapar

    storage.addCarToStorage(newCar); // mesajdan önce Local Storage'e ekleme yapacak

    ui.displayMessages("Araç başarıyla eklendi...", "success");
  }

  ui.clearInputs(titleElement, urlElement, priceElement);

  e.preventDefault();
}

function deleteCar(e) {
  if (e.target.id === "delete-car") {
    ui.deleteCarFromUI(e.target);

    //e.target=butona erişir, parentElement = td'ye erişir, previousElementSibling = kardeşine ulaşır, textContent = yazısını alır
    storage.deleteCarFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );

    ui.displayMessages("Silme işlemi başarıyla gerçekleşti...", "success");
  }
}

function clearAllCars() {
  if (confirm("Tüm araçlar silinecek. Emin misiniz?")) {
    // kullanıcı cevap vereceği için confirm kullandık
    ui.clearAllCarsFromUI(); // arayüzden silinecek
    storage.clearAllCarsFromStorage(); // storage'dan silinecek
  }
}
