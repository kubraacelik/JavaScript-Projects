//Harf Sayısı Bulma

let metin = prompt("Metin giriniz :");

let harf = prompt("Harf giriniz : ");

let sonuc = bul(harf);
alert("Harf sayısı : " + sonuc);

function bul(harf) {
  let toplam = 0;

  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLocaleLowerCase() == harf.toLocaleLowerCase()) {
      //toLocaleLowerCase() = küçük harf büyük harf hassasiyeti için kullandıık
      toplam += 1;
    }
  }

  return toplam;
}
