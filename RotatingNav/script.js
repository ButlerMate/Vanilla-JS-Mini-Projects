const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
const body = document.querySelector('body');

open.addEventListener('click', () => {
    container.classList.add('show-nav');
    body.style.overflow = 'hidden'
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav');
    body.style.overflowY = 'scroll';
})