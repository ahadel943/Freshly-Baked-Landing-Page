let menu = document.querySelector('.menu');
let close = document.querySelector('.close');
let navMenu = document.querySelector('.nav-menu');

menu.onclick = () => {
    navMenu.style.transform = 'translateX(0)';
}

close.onclick = () => {
    navMenu.style.transform = 'translateX(100%)';
}