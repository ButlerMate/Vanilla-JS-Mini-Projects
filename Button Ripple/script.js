const button = document.querySelector('button');

button.addEventListener('click', (e) => {
    
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    button.innerHTML = `Click <span class="circle" style="top: ${yInside}px; left: ${xInside}px;"></span>`
    // setTimeout(window.location.href = 'https://www.youtube.com/watch?v=dtKciwk_si4', 600)

})