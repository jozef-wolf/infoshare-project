
//naming const elements 

const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');


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
    activeSlide++;
    nextSlide(activeSlide);
    if (activeSlide === 8) {
        activeSlide = -1;
        return;
    }
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

//play slide show

playBtn.addEventListener('click', () => {
    slideInterval = setInterval(function () {
        activeSlide++;
        nextSlide(activeSlide);
        if (activeSlide === 8) {              // active || pauseBtn.clicked === true
            clearInterval(slideInterval);    // else pauseBtn.clicked === true
        }
        if (activeSlide === 8) {
            activeSlide = -1;
            return;
        }
    }, 300);
});

//pause slide show

pauseBtn.addEventListener('click', () => {
    clearInterval();
});



