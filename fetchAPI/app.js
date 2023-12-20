//? Örnek 1

// function getStudents(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getStudents("students.json");

//? Örnek 2

function getData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getData("https://jsonplaceholder.typicode.com/users");
