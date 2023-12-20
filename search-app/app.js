const formWrappper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

//event'lerin çalışacağı kısım
function runEventListeners() {
  form.addEventListener("submit", search);
}

function search(e) {
  const value = searchInput.value.trim();

  fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
    //${value} = inputa yazılan değere göre gelecek
    method: "GET",
    headers: {
      Authorization: "Client-ID EBZX5OoYULdQbGTzii_4OnkiXPO7P4m17bDpUHuneDA", //access key yazdık
    },
  })
    .then((res) => res.json())
    .then((data) => {
      Array.from(data.results).forEach((image) => {
        //console.log(image.urls.small);
        addImageToUI(image.urls.small);
      });
    })
    .catch((err) => console.log(err));

  e.preventDefault();
}

//arayüze resim ekler, ekrana resimleri basacak
function addImageToUI(url) {
  const div = document.createElement("div");
  div.className = "card";

  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.height = "400";
  img.width = "400";

  div.appendChild(img);
  imageListWrapper.appendChild(div);
}
