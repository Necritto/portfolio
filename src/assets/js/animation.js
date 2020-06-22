const el1 = document.querySelector(".photo");
const el2 = document.querySelector(".descr");
const el3 = document.querySelector(".skills-wrap");
const el4 = document.querySelector(".works-wrap");

window.addEventListener("scroll", () => {
  el1.classList.add("fadeLeft");
  el2.classList.add("fadeRight");
  if (window.pageYOffset > 800) el3.classList.add("fadeDown");
  if (window.pageYOffset > 1600) el4.classList.add("fadeDown");
});

// Navigation link animation

const sections = document.querySelectorAll(".section");
const navLink = [...document.querySelectorAll(".nav li")];

const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach((entry) => {
    const id = entry.target.id;
    const activeAnchor = document.querySelector(`[data-page=${id}]`).getAttribute("href").substr(1);

    switch (activeAnchor) {
      case "home": {
        navLink.forEach((i) => i.classList.remove("position"));
        navLink[0].classList.add("position");
        break;
      }
      case "about": {
        navLink.forEach((i) => i.classList.remove("position"));
        navLink[1].classList.add("position");
        break;
      }
      case "skills": {
        navLink.forEach((i) => i.classList.remove("position"));
        navLink[2].classList.add("position");
        break;
      }
      case "works": {
        navLink.forEach((i) => i.classList.remove("position"));
        navLink[3].classList.add("position");
        break;
      }
      case "contacts": {
        navLink.forEach((i) => i.classList.remove("position"));
        navLink[4].classList.add("position");
        break;
      }
      default: {
        navLink.forEach((i) => i.classList.remove("position"));
        break;
      }
    }
  });
}

sections.forEach((section) => {
  observer.observe(section);
});
