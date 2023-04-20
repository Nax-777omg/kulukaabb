function slide() {
    const images = document.querySelectorAll(".slider img");
    const active = document.querySelector(".slider img.active");
    const next = active.nextElementSibling || images[0];
    active.classList.remove("active");
    next.classList.add("active");
  }
  setInterval(slide, 5000);
  