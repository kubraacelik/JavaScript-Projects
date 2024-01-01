const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    //birine basınca diğer resimdeki active'lik gitsin
    removeActive();
    //hangi resmin üzerine basarsam active class'ına sahip olur
    panel.classList.add("active");
  });
});

function removeActive() {
  panels.forEach((panel) => {
    //active class'ına sahip tüm class'ları kaldır
    panel.classList.remove("active");
  });
}
