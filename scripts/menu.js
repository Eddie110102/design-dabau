let isMenuOpen = false;
const openMenu = document.querySelector("#menu");
const closeMenu = document.querySelector("#close");
const menuList = document.querySelector("nav");
openMenu.addEventListener("click", function () {
  isMenuOpen = true;
  menuList.classList.add("active");
});

closeMenu.addEventListener("click", function () {
  isMenuOpen = false;
  menuList.classList.remove("active");
});
