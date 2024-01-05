const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

//setInterval = belirli bir fonksiyonu, belirli bir sürede tekrarlatır
let int = setInterval(bluring, 30);

function bluring() {
  load++;

  if (load > 99) {
    // işlemi durdur
    clearInterval(int);
  }

  //sayfa yenilenince sayı artsın
  loadText.innerText = `${load}%`;

  //load değişkeni 0'dan 100'e kadar saysın ve opacity 1'den 0'a kadar yapılsın
  loadText.style.opacity = scale(load, 0, 100, 1, 0);

  //0'dan 100'e gittiği sürece blurluğu 30'dan 0'a getir
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//bu fonksiyon, belirli bir aralıktaki bir sayıyı başka bir aralığa dönüştürmek için kullanılabilir.
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
