const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const search_bar = document.querySelector('.search-bar');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    search_bar.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
