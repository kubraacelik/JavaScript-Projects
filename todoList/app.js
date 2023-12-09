//Önce tüm elementleri seçiyoruz
const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#clearButton");

let todos = [];

runEvents();

//form'da submit yapınca addTodo fonksiyonum çalışsın
function runEvents() {
  form.addEventListener("submit", addTodo);
}

function addTodo(e) {
  const inputText = addInput.value.trim();

  if (inputText == null || inputText == "") {
    alert("Lütfen bir değer giriniz!");
  } else {
    //arayüze ekleme
    addTodoUI(inputText);
    addToDoStorage(inputText);
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
