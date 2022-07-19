const navId = document.getElementById("nav__menu"),
ToggleBtnId = document.getElementById("nav__toggle-btn"),
CloseBtnId = document.getElementById("nav__close-btn");

ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

AOS.init();

gsap.from(".nav__logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

gsap.from(".nav__menu-list .nav__item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

gsap.from(".nav__toggle-btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

/* ==== HEADER ==== */

gsap.from(".footer__headling", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});
  