const toggleNav = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggleNav.addEventListener('click', () => {
    nav.classList.toggle('active');
})