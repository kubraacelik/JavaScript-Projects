let urun1 = {
  isim: "ACER Swift",
  kategori: "Teknoloji",
  fiyat: "38.299₺",
};

let urun2 = {
  isim: "ACER Nitro 5",
  kategori: "Teknoloji",
  fiyat: "24.999₺",
};
let urun3 = {
  isim: "ACER Gaming",
  kategori: "Teknoloji",
  fiyat: "24.999₺",
};
let urun4 = {
  isim: "LENOVO V14",
  kategori: "Teknoloji",
  fiyat: "10.999₺",
};
let urun5 = {
  isim: "LENOVO Ideapad",
  kategori: "Teknoloji",
  fiyat: "6.999₺",
};
let urun6 = {
  isim: "Monster Abra A5",
  kategori: "Teknoloji",
  fiyat: "22.973₺",
};
let urun7 = {
  isim: "MSI Thin GF63 ",
  kategori: "Teknoloji",
  fiyat: "42.915₺",
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6, urun7];

let filtreliUrunler = [];

let kullaniciUrunİsmi = prompt("Ürün ismi giriniz : ");

filtreliUrunleriDoldur(urunler);
filtreliUrunleriYazdir(filtreliUrunler);

function filtreliUrunleriDoldur(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunİsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}

function filtreliUrunleriYazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.kategori);
  });
}
