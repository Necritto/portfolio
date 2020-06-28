const btn = document.querySelector(".show-menu");
const nav = document.querySelector(".nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
  btn.classList.toggle("show-menu__active");
});

document.addEventListener("scroll", function (e) {
  e.preventDefault();
  nav.classList.remove("active");
  btn.classList.remove("show-menu__active");
});
