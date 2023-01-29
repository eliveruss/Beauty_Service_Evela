const burgerBtn = document.querySelector('.burger');
const burgerNav = document.querySelector('.navigation');
const burgerScrollOff = document.querySelector('body');

function burgerActive (){
    burgerBtn.classList.toggle('active');
    burgerNav.classList.toggle('active');
    burgerScrollOff.classList.toggle('active');
}

burgerBtn.addEventListener('click', burgerActive);
    
