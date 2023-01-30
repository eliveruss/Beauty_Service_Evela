const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.navigation');
const burgerScrollOff = document.querySelector('body');

function burgerActive() {
    burgerBtn.classList.toggle('active');
    burgerNav.classList.toggle('active');
    burgerScrollOff.classList.toggle('active');
}

burgerBtn.addEventListener('click', burgerActive);



const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});