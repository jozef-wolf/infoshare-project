
//naming const elements 

const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

//naming let elements
let numberOfImages = slideImage.length;
let width = slideImage[0].clientWidth;
let activeSlide = 0;

//slider 

function slide() {

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + '%';
    });

    slideImage[0].classList.add('active');
}
slide();

//next button slider

nextBtn.addEventListener('click', () => {


    if (activeSlide === numberOfImages-1) {
        return numberOfImages;
    }

    activeSlide++;
    nextSlide(activeSlide);
});

function nextSlide(slideNumber) {
    slidesContainer.style.transform = 'translateX(-' +
        width * slideNumber + 'px)';
}
//prev button slider

prevBtn.addEventListener('click', () => {
    activeSlide--;
    nextSlide(activeSlide);
});

function nextSlide(slideNumber) {
    slidesContainer.style.transform = 'translateX(-' +
        width * slideNumber + 'px)';
}