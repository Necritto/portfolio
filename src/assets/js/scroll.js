const anchors = document.querySelectorAll(".scroll");

for (let anchor of anchors) {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();

    const id = anchor.getAttribute("href").substr(1);

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}
