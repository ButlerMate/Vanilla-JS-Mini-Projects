const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let blurInt = setInterval(blurring, 30); //timebased loop

function blurring() {
    load++

    if(load >= 100) {
        clearInterval(blurInt);
    }
    
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0.0);
    bg.style.filter = `blur(${scale(load, 0, 100, 25, 0)}px)`
}


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}