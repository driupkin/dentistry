import './index.css';
const menuButton = document.querySelector('.menu__button');
const menuContainer = document.querySelector('.menu__container');
const menu = document.querySelector('.menu');
const page = document.querySelector('.page');
const logoHidden = menuContainer.querySelector('.logo');

menuButton.addEventListener('click', () => {
    menuContainer.classList.toggle('menu__container_opened');
    menu.classList.toggle('menu_opened');
    menuButton.classList.toggle('menu__button_active');
    menuButton.classList.toggle('menu__button_rotation');
    setTimeout(() => {
        logoHidden.classList.toggle('logo_hidden')
    }, 1000);
});
document.addEventListener('click', (evt) => {
    if (evt.target == page) {
        menuContainer.classList.remove('menu__container_opened');
        menu.classList.remove('menu_opened');
        menuButton.classList.add('menu__button_active');
    }
});
menuButton.addEventListener('mouseover', () => {
    menuContainer.classList.add('menu__container_hover-on-button');
});
// menuButton.addEventListener('mouseout', () => {
//     menuContainer.classList.remove('menu__container_hover-on-button');
// });