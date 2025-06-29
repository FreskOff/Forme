import './scroll.js';
import './slider.js';
import './form.js';
import './wallet.js';

// Инициализация бургер-меню
const burger = document.querySelector('.nav__burger');
const navList = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    navList.classList.toggle('active');
    burger.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        burger.classList.remove('active');
    });
});