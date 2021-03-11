const slider = document.querySelector(".slider");
const sliderContainer = document.querySelector(".slider__container");
const previousBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const slideImage = document.querySelectorAll(".slider__container--image");

let numberOfImages = slideImage.length;
let width = slideImage[0].clientWidth;
let activeSlide = 0;

function slide() {
  slideImage.forEach((img, i) => {
    img.style.left = i * 100 + "%";
  });

  slideImage[0].classList.add("active");
}
slide();

function nextSlide(slideNumber) {
  sliderContainer.style.transform =
    "translateX(-" + width * slideNumber + "px)";
}

nextBtn.addEventListener("click", () => {
  if (activeSlide === 7) {
    activeSlide = -1;
    return;
  }
  activeSlide++;
  nextSlide(activeSlide);
});

previousBtn.addEventListener("click", () => {
  if (activeSlide === 0) {
    activeSlide = 8;
    return;
  }
  activeSlide--;
  nextSlide(activeSlide);
});
