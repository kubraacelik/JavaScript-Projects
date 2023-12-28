const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 270);
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length; //o satırda kaç resim var gösterir

  arrow.addEventListener("click", function () {
    //arrow'a tıklanınca bu fonksiyon çalışsın
    clickCounter++;
    if (imageItem - (5 + clickCounter) + (5 - widthRatio) >= 0) {
      //resmin sayısı - 5(görünen resim) + tıkladığın kadar çıkan resim >= 0 ise aşağıdaki çalışsın

      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 270
      }px)`;
      //arrow'a tıklayınca resim -x ekseninde 270px gider.
      //270 = resmin boyutu(240) + aradaki boşluk(30)
    } else {
      movieLists[i].style.transform = "translateX(0)";
      //aksi halde ilk resme dönsün
      clickCounter = 0;
    }
  });
});

/* dark mode  */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .navbar, .sidebar, .sidebar i, .toggle, .toggle-ball, .movie-list-filter select"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
