const steps = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const progress = document.getElementById('progress');

let curActive = 1;

next.addEventListener('click', () => {
    if (curActive > steps.length){
        curActive = steps.length;
    } else {
        curActive++;
    }
    update();
})

prev.addEventListener('click', () => {
    if (curActive < 1){
        curActive = 1;
    } else {
        curActive--;
    }
    update();
})

function update() {
    steps.forEach((circle, index) => {
        if(index < curActive){
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = ((actives.length - 1)/( steps.length - 1)) * 100 + '%'; 
    
    if (curActive === 1){
        prev.disabled = true;
    } else if(curActive === steps.length){
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}