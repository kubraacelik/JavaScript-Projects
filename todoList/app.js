//Önce tüm elementleri seçiyoruz
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");
const filterInput = document.querySelector("#todoSearch");

let todos = [];

runEvents();

function runEvents() {
  //form'da submit yapınca addTodo fonksiyonum çalışsın
  form.addEventListener("submit", addTodo);
  //Sayfa yüklendiğinde pageLoaded metodu çalışsın
  document.addEventListener("DOMContentLoaded", pageLoaded);
  //Çarpı işaretine basınca ToDo silinsin
  secondCardBody.addEventListener("click", removeToDoToUI);
  //Tüm Todoları temizle butonuna basınca hepsi gitsin
  clearButton.addEventListener("click", allToDosEverywhere);
  //Todo arayınız input'una girilen değerlerin karşımıza gelmesini sağlar
  filterInput.addEventListener("keyup", filter);
}

//Local Storage'de olan verilerim ekrana gelsin
function pageLoaded() {
  checkTodosFromStorage();
  todos.forEach(function (todo) {
    addTodoUI(todo);
  });
}

//Todo arayınız input'una girilen değerlerin filtrelenmesini sağlar
function filter(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const todoListesi = document.querySelectorAll(".list-group-item");

  if (todoListesi.length > 0) {
    todoListesi.forEach(function (todo) {
      //listenin içinde yazan text'te filtrelemek istediğin kelime varsa
      if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
        //o kelimeyi ekranda görünür yap
        todo.setAttribute("style", "display : block");
      } else {
        //o kelimeye uymuyorsa ekranda görünmesin
        todo.setAttribute("style", "display : none !important");
      }
    });
  } else {
    showAlert("warning", "Filtreleme yapmak için en az bir todo olmalıdır");
  }
}

//Tüm Todo'ları temizler
function allToDosEverywhere() {
  //Ekrandan siler
  const todoListesi = document.querySelectorAll(".list-group-item");
  if (todoListesi.length > 0) {
    todoListesi.forEach(function (todo) {
      todo.remove();
    });

    //Storage'den siler
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showAlert("success", "Başarılı bir şekilde silindi");
  } else {
    showAlert("warning", "Silmek için en az bir ToDo gereklidir!");
  }
}

//İstediğim todo'yu silmek için
function removeToDoToUI(e) {
  //Ekrandan silmek için
  if (e.target.className === "fa fa-remove") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();

    //Storage'den silmek için
    removeToDoToStorage(todo.textContent);

    showAlert("success", "Todo başarılı bir şekilde silindi");
  }
}

//Storage'den değer siler
function removeToDoToStorage(removeToDo) {
  checkTodosFromStorage();
  todos.forEach(function (todo, index) {
    if (removeToDo === todo) {
      //index numarasını belirleyip 1 değer siler
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(e) {
  const inputText = addInput.value.trim();

  if (inputText == null || inputText == "") {
    showAlert("warning", "Lütfen bir değer giriniz!");
  } else {
    //arayüze ekleme
    addTodoUI(inputText);
    addToDoStorage(inputText);
    showAlert("success", "Todo başarılı bir şekilde eklendi");
  }
  e.preventDefault(); //başka sayfaya yönlendirmesin
}

//arayüze ekleme => Todo Giriniz butonuna yazılanlar altta liste olarak yazılsın
function addTodoUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);

  //Todo Giriniz butonunda yazılan eklendikten sonra buton temizlensin
  addInput.value = "";
}

function addToDoStorage(newTodo) {
  checkTodosFromStorage();
  todos.push(newTodo);
  //key'i todos olanları getir
  localStorage.setItem("todos", JSON.stringify(todos));
}

function checkTodosFromStorage() {
  //local storage'de veri var mı kontrol ediyor
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
}

//Bigilendirme mesajı
function showAlert(type, message) {
  const div = document.createElement("div");

  div.className = `alert alert-${type}`;
  div.textContent = message;

  firstCardBody.appendChild(div);

  //2,5 saniye sonra mesaj kaybolsun
  setTimeout(function () {
    div.remove();
  }, 2500);
}
