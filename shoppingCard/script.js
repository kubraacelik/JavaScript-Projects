//! Variables
const cartBtn = document.querySelector(".card-btn");
const clearCartBtn = document.querySelector(".btn-clear");
const cartItems = document.querySelector(".card-items");
const cartTotal = document.querySelector(".total-value");
const cartContent = document.querySelector(".cart-list");
const productsDOM = document.querySelector("#products-dom");

class Products {
  async getProducts() {
    try {
      //mockAPI'den adresi alıp buraya verdik.
      let result = await fetch(
        "https://65885c2e90fa4d3dabf9cf6b.mockapi.io/products"
      );
      let data = await result.json();
      let products = data;
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  //API'deki resimleri ekrana basıyoruz, ekrandaki kısmın adına displayProducts dedik.
  displayProducts(products) {
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
}

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  products.getProducts().then((products) => {
    ui.displayProducts(products);
  });
});
