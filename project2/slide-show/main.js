
//naming const elements 

const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

//naming let elements

let width = slideImage[0].clientWidth;

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
    slidesContainer.style.transform = 'translateX(-' +
        width + 'px)';
});

//prev button slider

nextBtn.addEventListener('click', () => {
    slidesContainer.style.transform = 'translateX(-' -
        width - 'px)';
});