const progress = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

// Sonraki butonuna bastığımızda
next.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

// Önceki butonuna bastığımızda
prev.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  //console.log(actives.length, circles.length);
  //console.log(actives.length / circles.length);
  //console.log((actives.length / circles.length) * 100);
  //console.log(((actives.length - 1) / (circles.length - 1)) * 100);
  //console.log(((actives.length - 1) / (circles.length - 1)) * 100 + "%");

  //butona bastıkça çizgilerde renklenecek
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  //1. circle'ye gelinirse önceki buton, 4. circle'ye gelinirse sonraki buton disabled olsun
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
