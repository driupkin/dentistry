import './index.css';
const menuButton = document.querySelector('.menu__button');
const menuContainer = document.querySelector('.menu__container');
const menu = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('menu__container_opened');
    menu.classList.toggle('menu_opened');
});