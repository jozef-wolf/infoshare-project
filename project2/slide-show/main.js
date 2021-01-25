
//naming elements 

const slideImage = document.querySelectorAll('.slide-image');
const slidesContainer = document.querySelector('.slides-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');


//naming 
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
    if (activeSlide === 0) {
        return;
    }
    activeSlide--;
    nextSlide(activeSlide);
});

function nextSlide(slideNumber) {
    slidesContainer.style.transform = 'translateX(-' +
        width * slideNumber + 'px)';
}

//play and pause slide show

//pause show function
const pauseShow = pauseBtn.addEventListener('click', () => {    //pause button added
    clearInterval(slideShow);
    return;
});


playBtn.addEventListener('click', () => {
    slideShow = setInterval(function () {
        console.log('start');
        activeSlide++;
        nextSlide(activeSlide);
        if (activeSlide === 8) {
            console.log('clear');
            clearInterval(slideShow);
        }
        if (activeSlide === 8) {
            activeSlide = -1;
            return;
        } else {
            return pauseShow;
        }
    }, 300);
});

//buttons opacity changed

function opacityChange() {
    let button = document.getElementById('change-opacity').style.opacity;
    let opacity = '';
    console.log(button);
    if (button !== '100%') {
        opacity = '50%';
        document.getElementById('change-opacity').style.opacity = opacity;

    }
    else if (button === '50%') {
        opacity = '100%';
        document.getElementById('change-opacity').style.opacity = opacity;

    }

}







