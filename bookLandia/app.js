let bookList = [],
  basketList = [];

//toastr kısmını sağ alta aldım
toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

// Sepeti aç, kapa işlemi yapar. Neye basınca çalışsın istiyorsam ona onclick="toggleModal()" yaz
const toggleModal = () => {
  const basketModalEl = document.querySelector(".basket__modal");
  basketModalEl.classList.toggle("active");
};

// product.json'daki verileri çekeceğiz
const getBooks = () => {
  fetch("./products.json") //bana product.json'daki verileri getir
    .then((res) => res.json()) //bunu res.json ile json'a çevir, bir sonraki then'e ver
    .then((books) => (bookList = books)); //ordan gelen listeyi al
};

getBooks();

//yıldız oluşturma kısmı
const createBookStars = (starRate) => {
  let starRateHtml = "";
  for (let i = 1; i <= 5; i++) {
    if (Math.round(starRate) >= i)
      starRateHtml += `<i class="bi bi-star-fill active"></i>`;
    else starRateHtml += `<i class="bi bi-star-fill"></i>`;
  }

  return starRateHtml;
};

//verileri çekmenin devamı
const createBookItemsHtml = () => {
  const bookListEl = document.querySelector(".book__list");
  let bookListHtml = ""; //bookListEl'e HTML atayacağız
  bookList.forEach((book, index) => {
    //döngü her döndüğünde bookListHtml'e yeni bir HTML string'i ekleyeceğiz
    //modu 2'ye 0 ise buraya offset-2 ekleriz
    bookListHtml += `<div class="col-5 ${index % 2 == 0 && "offset-2"} my-5">
    <div class="row book__card"> 
        <div class="col-6">
            <img class="img-fluid shadow" src="${book.imgSource}"
                alt="Nutuk-Mustafa Kemal Atatürk" width="258px" height="400px">
        </div>
        <div class="col-6 d-flex flex-column justify-content-between">
            <div class="book__detail">
                <span class="fos gray fs-5">${book.author}</span><br>
                <span class="fs-4 fw-bold">${book.name}</span><br>
                <span class="book__star-rate">
                    ${createBookStars(book.starRate)}
                    <span class="gray">${book.reviewCount} reviews</span>
                </span>
            </div>
            <p class="book__description fos gray">${book.description}</p>
            <div>
                <span class="black fw-bold fs-4 me-3">${book.price}₺</span>
                ${
                  book.oldPrice
                    ? `<span class="fs-4 fw-bold old__price">${book.oldPrice}₺</span>`
                    : ""
                }
            </div>
            <button class="btn__purple" onclick = "addBookToBasket(${
              book.id
            })">ADD BASKET</button>
        </div>
    </div>
</div>`;
  });

  bookListEl.innerHTML = bookListHtml;
};

//kategorileri belirttik
const BOOK_TYPES = {
  ALL: "Tümü",
  NOVEL: "Roman",
  CHILDREN: "Çocuk",
  SELFIMPROVEMENT: "Kişisel Gelişim",
  HISTORY: "Tarih",
  FINANCE: "Finans",
  SCIENCE: "Bilim",
};

//kategorilere tıklayınca ilgili kitapların gelmesi
const createBookTypesHtml = () => {
  const filterEl = document.querySelector(".filter");
  let filterHtml = "";

  //Başlangıç değeri All varken ilgili kitaplar gelsin
  let filterTypes = ["ALL"];
  bookList.forEach((book) => {
    if (filterTypes.findIndex((filter) => filter == book.type) == -1)
      filterTypes.push(book.type); //eğer bu type'ı içeren kitap yoksa (yani indexi -1 olur) filterTypes'a yeni yazanı ata
  });

  filterTypes.forEach((type, index) => {
    filterHtml += `<li class="${
      index == 0 ? "active" : null //<li class="${index == 0 ? "active" : null} = Tümü kategorisini aktif eder
    }"onclick="filterBooks(this)" data-type="${type}">${
      //onclick="filterBooks(this) = tıklanınca değişeceği için bu fonksiyon çalışsın.
      BOOK_TYPES[type] || type
    }</li>`; //${BOOK_TYPES[type] || type} = bana type'ı verdiğin şeyi gönder eğer herhangi bir type bulamadıysan bana direkt yazan type'ı ver
  });

  filterEl.innerHTML = filterHtml; //en son filterHtml'i ekliyoruz
};

const filterBooks = (filterEl) => {
  //dışarıdan filterEl alacak

  //kategoriden neye tıklarsam onu aktif edip renklenecek ve büyüyecek
  document.querySelector(".filter .active").classList.remove("active");
  filterEl.classList.add("active");

  let bookType = filterEl.dataset.type;
  getBooks(); //tipi ALL ise hepsini döner
  if (bookType != "ALL")
    bookList = bookList.filter((book) => book.type == bookType); //her bir kitaba bak tipi bookType olanları dön
  createBookItemsHtml();
};

//add basket butonuna bastıklarım basketList'e gelsin
const listBasketItems = () => {
  localStorage.setItem("basketList", JSON.stringify(basketList));

  const basketListEl = document.querySelector(".basket__list");

  //sepet boşsa bir şey yazmasın, doluysa üstünde sayı yazsın
  const basketCountEl = document.querySelector(".basket__count");
  basketCountEl.innerHTML = basketList.length > 0 ? basketList.length : null;

  const totalPriceEl = document.querySelector(".total__price");

  let basketListHtml = "";
  let totalPrice = 0;

  basketList.forEach((item) => {
    totalPrice += item.product.price * item.quantity;
    basketListHtml += `<li class="basket__item">
    <img src="${item.product.imgSource}">
    <div class="basket__item-info">
        <h3 class="book__name">${item.product.name}</h3>
        <span class="book__price">${item.product.price}₺</span><br>
        <span class="book__remove" onclick = "removeItemToBasket(${item.product.id})">remove</span>
    </div>
    <div class="book__count">
        <span class="decrease" onclick = "decreaseItemToBasket(${item.product.id})">-</span>
        <span class="my-5">${item.quantity}</span>
        <span class="increase" onclick = "increaseItemToBasket(${item.product.id})">+</span>
    </div>
</li>`;
  });

  basketListEl.innerHTML = basketListHtml
    ? basketListHtml
    : `<li class="basket__item">No items to Buy again.</li>`;
  totalPriceEl.innerHTML =
    totalPrice > 0 ? "Total : " + totalPrice.toFixed(2) + " ₺" : null;
};

//add basket butonuna basınca ürün eklensin
const addBookToBasket = (bookId) => {
  let findedBook = bookList.find((book) => book.id == bookId); //bastığımız kitabı bulsun
  if (findedBook) {
    const basketAlreadyIndex = basketList.findIndex(
      (basket) => basket.product.id == bookId
    );
    if (basketAlreadyIndex == -1) {
      //basılan kitap önceden yoksa
      let addedItem = { quantity: 1, product: findedBook }; //kitabın sayısını(quantity=1 1 artacak) ve kitabın kendisini(product) ekleyecek
      basketList.push(addedItem); //listeye pushla
    } else {
      //basılan kitap önceden varsa sadece sayısını arttır
      if (
        basketList[basketAlreadyIndex].quantity <
        basketList[basketAlreadyIndex].product.stock
      )
        basketList[basketAlreadyIndex].quantity += 1;
      else {
        toastr.error("Sorry, we don't have enough stock.");
        return;
      }
    }
    listBasketItems(); //listeyi yeniler
    toastr.success("Book added to basket succesfully.");
  }
};

//remove basınca çalışsın
const removeItemToBasket = (bookId) => {
  const findedIndex = basketList.findIndex(
    (basket) => basket.product.id == bookId
  );
  if (findedIndex != -1) {
    basketList.splice(findedIndex, 1); //bu index'teki toplam 1 elemanı sil
  }
  listBasketItems(); //listeyi yeniler
};

//-'ye basınca azaltır
const decreaseItemToBasket = (bookId) => {
  const findedIndex = basketList.findIndex(
    (basket) => basket.product.id == bookId
  );
  if (findedIndex != -1) {
    if (basketList[findedIndex].quantity != 1)
      basketList[findedIndex].quantity -= 1;
    else removeItemToBasket(bookId);
    listBasketItems();
  }
};

//+'ya basınca azaltır
const increaseItemToBasket = (bookId) => {
  const findedIndex = basketList.findIndex(
    (basket) => basket.product.id == bookId
  );
  if (findedIndex != -1) {
    if (
      basketList[findedIndex].quantity < basketList[findedIndex].product.stock
    )
      basketList[findedIndex].quantity += 1;
    else toastr.error("Sorry, we don't have enough stock.");
    listBasketItems();
  }
};

//sayfa yenilenince sepette kalanlar hatırlansın
if (localStorage.getItem("basketList")) {
  basketList = JSON.parse(localStorage.getItem("basketList"));
  listBasketItems();
}

setTimeout(() => {
  createBookItemsHtml();
  createBookTypesHtml();
}, 100);

toastr.info("Are you the 6 fingered man?");
