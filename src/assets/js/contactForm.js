document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".contact-wrap form");
  const formSending = document.querySelector(".form-sending");

  const send = (formData) => {
    fetch("/src/assets/php/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(() => {
        formSending.classList.add("success");
        form.classList.add("hide");
      })
      .catch((error) => console.error(error));
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = new FormData(this);
    formData = Object.fromEntries(formData);
    send(formData);
    this.reset();
  });
});
