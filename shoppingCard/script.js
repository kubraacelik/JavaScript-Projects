//! Variables
const cartBtn = document.querySelector(".card-btn");
const clearCartBtn = document.querySelector(".btn-clear");
const cartItems = document.querySelector(".card-items");
const cartTotal = document.querySelector(".total-value");
const cartContent = document.querySelector(".cart-list");
const productsDOM = document.querySelector("#products-dom");

let cart = [];
let buttonsDOM = [];

class Products {
  async getProducts() {
    //her şey yolunda giderse bu bloğa girecek
    try {
      //mockAPI'den adresi alıp buraya verdik.
      let result = await fetch(
        "https://65885c2e90fa4d3dabf9cf6b.mockapi.io/products"
      );
      let data = await result.json();
      let products = data;
      return products;
      //sorun olursa bu bloğa girecek
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  //API'deki resimleri ekrana basıyoruz, ekrandaki kısmın adına displayProducts dedik.
  displayProducts(products) {
    //1 resim için ayrılan alan
    let result = "";
    products.forEach((item) => {
      result += `
        <div class="col-lg-4 col-md-6">
        <div class="product">
            <div class="product-image">
                <img class="p-image" src="${item.image}" alt="product">
            </div>
            <div class="product-hover">
                <span class="product-title">${item.title}</span>
                <span class="product-price">$ ${item.price}</span>
                <button class="btn-add-to-card" data-id=${item.id}>
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    </div>
        `;
    });
    productsDOM.innerHTML = result;
  }

  getBagButtons() {
    //sepete ekle butonunu seçtik
    const buttons = [...document.querySelectorAll(".btn-add-to-card")];
    //butonların hepsini buttonsDOM'a ekledim
    buttonsDOM = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      //Eğer sepete ekleyeceğim ürün önceden eklenmişse tekrar eklenmesin
      if (inCart) {
        button.setAttribute("disabled", "disabled");
        button.opacity = ".3";
      }
      //Öneceden eklenmemişse ekle
      else {
        button.addEventListener("click", (event) => {
          //Butona click event'i yapıldığı için birdaha seçilemesin
          event.target.disabled = true;
          //Butona basıldığı için şeffaflaşsın
          event.target.style.opacity = ".3";

          //ekle butonuna basılan ürünü cartItem nesnesi içinde tutuyoruz, amount:1 1 adet eklendi demek
          let cartItem = { ...Storage.getProduct(id), amount: 1 };
          //cartItem'i cart dizisinde tutuyoruz
          cart = [...cart, cartItem];
          //cart dizisini local storage'a kaydediyoruz
          Storage.saveCart(cart);
          //yukarıda her bir eklenilen kartı saveCartValues'e gönder
          this.saveCartValue(cart);
          //eklenen her bir elemanı sepet ögesinde göster
          this.addCartItem(cartItem);
          //sepet butonuna tıklanınca açılsın
          this.showCart();
        });
      }
    });
  }

  saveCartValue(cart) {
    //sepetteki toplam tutar
    let tempTotal = 0;
    //sepetin üstünde yazan sayı
    let itemsTotal = 0;

    cart.map((item) => {
      tempTotal += item.price * item.amount;
      itemsTotal += item.amount;
    });

    //Sepetteki Subtotal kısmına tempTotal sayısını ekle. Virgülden sonra 2 sayı görünsün
    cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
    cartItems.innerText = itemsTotal;
  }

  addCartItem(item) {
    const li = document.createElement("li");
    li.classList.add("cart-list-item");
    li.innerHTML = `
        <div class="cart-left">
        <div class="cart-left-image">
            <img src="${item.image}" alt="product">
        </div>
        <div class="cart-left-info">
            <a class="cart-left-info-title" href="#">${item.title}</a>
            <span class="cart-left-info-price">$ ${item.price}</span>
        </div>
        </div>
        <div class="cart-right">
          <div class="cart-right-quantity">
              <button class="quantity-minus" data-id=${item.id}>
                  <i class="fa-solid fa-minus"></i>
              </button>
              <span class="quantity">${item.amount}</span>
                  <button class="quantity-plus" data-id=${item.id}>
                      <i class="fa-solid fa-plus"></i>
                  </button>
            </div>
            <div class="cart-right-remove">
                <button class="cart-remove-btn" data-id=${item.id}>
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
          </div>
    `;
    //li'yi cartContent'e ekledik
    cartContent.appendChild(li);
  }

  showCart() {
    cartBtn.click();
  }
}

//Altta new'lememek için static olarak oluşturacağız.
//Sayfa yüklenir yüklenmez application kısmındaki veriler otomatik olarak eklensin
class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  //id'ye göre işlem yapmak için
  static getProduct(id) {
    //localStorage'deki verileri getirip products içine attık
    let products = JSON.parse(localStorage.getItem("products"));
    //bunun içindeki her bir id eğer buton kısmındaki id'ye eşitse bunu dön
    return products.find((product) => product.id === id);
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

//Sayfa yüklendiğinde gerçekleşecek olaylar
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //Sayfa yüklendiğinde 1-Resimler ekrana gelsin
  //                    2-Resimler local storage'e kaydedilsin
  //                    3-Butonlar çalışsın
  products
    .getProducts()
    .then((products) => {
      ui.displayProducts(products);
      Storage.saveProducts(products);
    })
    .then(() => {
      ui.getBagButtons();
    });
});
