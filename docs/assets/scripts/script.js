let menuIcon = document.querySelector('.mobile-menu');
let siteNav = document.querySelector('.main-nav');
let navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', toggleM);

function toggleM() {
    siteNav.classList.toggle('main-nav--vissible');
    navLinks.classList.toggle('nav-links--vissible')
}

