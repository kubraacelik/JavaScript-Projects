const menuCollapseEl = document.querySelector(".menu__collapse");
const linksContainerEl = document.querySelector(".app__links-container");

//menü iconunu açıp kapatmak için
if (menuCollapseEl && linksContainerEl) {
  menuCollapseEl.addEventListener("click", () => {
    linksContainerEl.classList.toggle("active");

    //menüyü açıp kapatırken logosunun değişmesi için
    if (linksContainerEl.classList.contains("active")) {
      menuCollapseEl.src = "./assets/images/menu_close_icon.svg";
    } else {
      menuCollapseEl.src = "./assets/images/menu_open_icon.svg";
    }
  });
}
