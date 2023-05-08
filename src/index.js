import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const flipButtons = document.querySelectorAll("[data-carousel-btn]");
  const dataSlides = document.querySelector("[data-slides]");
  const slidesList = document.querySelectorAll(".slide");
  let offset = 0;
  offset = [...slidesList].indexOf(dataSlides.querySelector("[data-active]"));

  flipButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const activeSlide = dataSlides.querySelector("[data-active]");
      if (btn.dataset.carouselBtn === "next") {
        offset++;
      } else {
        offset--;
      }
      if (offset < 0) {
        offset = slidesList.length - 1;
      }

      if (offset >= slidesList.length) {
        offset = 0;
      }
      slidesList[offset].dataset.active = true;

      delete activeSlide.dataset.active;
    });
  });
});
