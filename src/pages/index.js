import './index.css';
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu_open');
    menuButton.classList.toggle('menu__button_active');
});