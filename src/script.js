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
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));