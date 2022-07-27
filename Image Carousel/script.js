const imgs = document.getElementById('imgs');
const prev = document.getElementById('left');
const next = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
    idx++

    changeImage();
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0;
    } else if (idx < 0){
        idx = img.length - 1;
    }
    imgs.style.transition = 'transform 0.5s ease-in-out'
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

next.addEventListener('click', () => {
    idx++
    changeImage();
    resetInterval();
})

prev.addEventListener('click', () => {
    idx--
    changeImage();
    resetInterval();
})

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

imgs.addEventListener('transitionend', () => {
    if(img[idx].id === 'lastClone'){
      imgs.style.transition = 'none'
      idx = img.length -2
      imgs.style.transform = `translateX(${-idx * 500}px)`
    }
    else if(img[idx].id === 'firstClone'){
      imgs.style.transition = 'none'
      idx = img.length - idx
      imgs.style.transform = `translateX(${-idx * 500}px)`
    }
  })