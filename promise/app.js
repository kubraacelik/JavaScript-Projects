//? Örnek 1

// let check = true;

// const promise1 = new Promise((resolve, reject) => {
//   if (check) {
//     resolve("Promise başarılı...");
//   } else {
//     reject("Promise başarısız...");
//   }
// });

// console.log(promise1);

//? Örnek 2

// let check = true;

// function createPromise() {
//   return new Promise((resolve, reject) => {
//     if (check) {
//       resolve("Promise başarılı...");
//     } else {
//       reject("Promise başarısız...");
//     }
//   });
// }

// createPromise()
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => console.log("Her zaman çalışır"));

//?  PROMİSE + XMLHTTPREQUEST

// function readStudents(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       });
//     } catch (error) {
//       reject(error);
//     }

//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// readStudents("students.json")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

//? JSON PLACEHOLDER ÖRNEĞİ

// function getURL(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     try {
//       xhr.addEventListener("readystatechange", () => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       });
//     } catch (error) {
//       reject(error);
//     }

//     xhr.open("GET", url);
//     xhr.send();
//   });
// }

// getURL("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     response.forEach((user) => {
//       if (user.id == 3) {
//         console.log(user.email);
//       }
//     });
//   })
//   .catch((err) => console.log(err))
//   .finally(() => console.log("Her zaman çalışır."));
