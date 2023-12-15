class MigrosBase {
  indirimOrani = 20;

  constructor(isim, soyisim, kartVarMi, urunler) {
    this.isim = isim;
    this.soyisim = soyisim;
    this.kartVarMi = kartVarMi;
    this.urunler = urunler;
  }

  hesapla() {
    let odenecekTutar = 0;

    if (this.urunleriKontrolEt(this.urunler)) {
      //Sepet dolu
      if (this.kartVarMi) {
        //Money kartı varsa indirimli halini uygula
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat * ((100 - this.indirimOrani) / 100);
        });
      } else {
        //Money kartı yoksa indirimli olmayan fiyatını ver
        this.urunler.forEach((urun) => {
          odenecekTutar += urun.fiyat;
        });
      }
    } else {
      //Sepet boş
      alert("En az bir tane ürün satın almalısınız.");
    }
    return odenecekTutar;
  }

  urunleriKontrolEt(urunler) {
    if (urunler != null && urunler.length > 0) {
      return true;
    }
    return false;
  }
}
