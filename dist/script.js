const navId = document.getElementById("nav__menu"),
ToggleBtnId = document.getElementById("nav__toggle-btn"),
CloseBtnId = document.getElementById("nav__close-btn");

ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});  
