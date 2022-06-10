var swiper = new Swiper(".slider-content", {
    slidesPerView: 2,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 2,
        },
    }


});
const sliderButtonNext = document.querySelector('.swiper-button_next');
const sliderButtonPrev = document.querySelector('.swiper-button_prev');

sliderButtonPrev.addEventListener('click', () => {
    swiper.slidePrev()
    sliderButtonPrev.style.opacity = 0.5;
    sliderButtonNext.style.opacity = 1;
})
sliderButtonNext.addEventListener('click', () => {
    swiper.slideNext()
    sliderButtonPrev.style.opacity = 1;
    sliderButtonNext.style.opacity = 0.5;
})