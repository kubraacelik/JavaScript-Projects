const boxes = document.querySelectorAll(".box");

//window icindeki scroll'a fonksiyon verdik
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 6) * 5;

  boxes.forEach((box) => {
    //getBoundingClientRect() = boyut ve görünüm alanına göre konumu belli edecek
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      //sağ ve soldaki box'larımızı getirsin
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
