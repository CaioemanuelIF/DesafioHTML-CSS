const carouselImages = document.querySelector(".carousel images");
const images = document.querySelectorAll(".carousel images img");
const carouselButtons = document.querySelectorAll(".carousel_button");
const numberOfImages = document.querySelectorAll(".carousel images img")
  .length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.id === "previous") {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 300;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 300;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
    images.forEach((image, index) => {
      if (index === imageIndex - 1) {
        image.classList.add("active");
      } else {
        image.classList.remove("active");
      }
    });
  });
});


