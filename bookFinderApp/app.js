let kitap1 = {
  isim: "Bir Kuzey Macerası",
  yazar: "Jack London",
  fiyat: 45,
  raf: "1.1.RAF",
};
let kitap2 = {
  isim: "Kızıl Veba",
  yazar: "Jack London",
  fiyat: 46,
  raf: "2.4.RAF",
};
let kitap3 = {
  isim: "Amok Koşucusu",
  yazar: "Stefan Zweig",
  fiyat: 23,
  raf: "3.2.RAF",
};
let kitap4 = {
  isim: "Otomatik Portakal",
  yazar: "Anthony Burgess",
  fiyat: 58,
  raf: "4.5.RAF",
};
let kitap5 = {
  isim: "Aklını En Doğru Şekilde Kullan",
  yazar: "Dr. Carol S. Dweck",
  fiyat: 125,
  raf: "1.3.RAF",
};
let kitap6 = {
  isim: "Bir Psikiyatristin Gizli Defteri",
  yazar: "Gary Small",
  fiyat: 84,
  raf: "2.2.RAF",
};
let kitap7 = {
  isim: "Bir İdam Mahkumunun Son Günü",
  yazar: "Victor Hugo",
  fiyat: 45,
  raf: "3.3.RAF",
};
let kitap8 = {
  isim: "Bir Yaz Gecesi Rüyası",
  yazar: "William Shakespeare",
  fiyat: 33,
  raf: "4.2.RAF",
};
let kitap9 = {
  isim: "Dönüşüm",
  yazar: "Franz Kafka",
  fiyat: 16,
  raf: "5.1.RAF",
};
let kitap10 = {
  isim: "Üç Kız Kardeş",
  yazar: "Anton Çehov",
  fiyat: 28,
  raf: "5.4.RAF",
};

let kitaplar = [
  kitap1,
  kitap2,
  kitap3,
  kitap4,
  kitap5,
  kitap6,
  kitap7,
  kitap8,
  kitap9,
  kitap10,
];

let raf11 = { kod: "1.1.RAF", goster: false };
let raf12 = { kod: "1.2.RAF", goster: false };
let raf13 = { kod: "1.3.RAF", goster: false };
let raf14 = { kod: "1.4.RAF", goster: false };
let raf15 = { kod: "1.5.RAF", goster: false };

let raf21 = { kod: "2.1.RAF", goster: false };
let raf22 = { kod: "2.2.RAF", goster: false };
let raf23 = { kod: "2.3.RAF", goster: false };
let raf24 = { kod: "2.4.RAF", goster: false };
let raf25 = { kod: "2.5.RAF", goster: false };

let raf31 = { kod: "3.1.RAF", goster: false };
let raf32 = { kod: "3.2.RAF", goster: false };
let raf33 = { kod: "3.3.RAF", goster: false };
let raf34 = { kod: "3.4.RAF", goster: false };
let raf35 = { kod: "3.5.RAF", goster: false };

let raf41 = { kod: "4.1.RAF", goster: false };
let raf42 = { kod: "4.2.RAF", goster: false };
let raf43 = { kod: "4.3.RAF", goster: false };
let raf44 = { kod: "4.4.RAF", goster: false };
let raf45 = { kod: "4.5.RAF", goster: false };

let raf51 = { kod: "5.1.RAF", goster: false };
let raf52 = { kod: "5.2.RAF", goster: false };
let raf53 = { kod: "5.3.RAF", goster: false };
let raf54 = { kod: "5.4.RAF", goster: false };
let raf55 = { kod: "5.5.RAF", goster: false };

let raflar = [
  [raf51, raf52, raf53, raf54, raf55],
  [raf41, raf42, raf43, raf44, raf45],
  [raf31, raf32, raf33, raf34, raf35],
  [raf21, raf22, raf23, raf24, raf25],
  [raf11, raf12, raf13, raf14, raf15],
];

//console kısmında rafları oluşturacak
function rafOlustur() {
  console.clear();
  let satir = "";
  //satır ve sütun için
  for (let i = 0; i < raflar.length; i++) {
    for (let j = 0; j < 5; j++) {
      //istenilen kitabın bulunduğu rafın gösteri true ise kodunu göster değilse --- yazsın
      satir += "|" + (raflar[i][j].goster ? raflar[i][j].kod : "---") + "";
    }
    console.log(satir);
    console.log("-------------------------");
    satir = "";
  }
}

//kullanıcının girdiği kitap kütüphanede var mı bulacağız
function kodBul(kitapIsmi) {
  let rafKod = null;
  kitaplar.forEach(function (kitap) {
    if (kitap.isim.toUpperCase().includes(kitapIsmi.toUpperCase(), 0)) {
      console.log(kitap.isim);
      rafKod = kitap.raf;
    }
  });
  return rafKod;
}

//istenilen kitabın hangi rafta olduğunu gösterecek
function raftaGoster(rafKodu) {
  for (let i = 0; i < raflar.length; i++) {
    for (let j = 0; j < 5; j++) {
      if (raflar[i][j].kod == rafKodu) {
        raflar[i][j].goster = true;
        break;
      }
    }
  }
}

rafOlustur();

let kitapIsmi = prompt("Lütfen bir kitap ismi giriniz : ");
let rafKod = kodBul(kitapIsmi);

if (rafKod != null) {
  raftaGoster(rafKod);
  rafOlustur();
} else {
  alert("İstediğiniz kitap kütüphanemizde bulunmamaktadır.");
}
