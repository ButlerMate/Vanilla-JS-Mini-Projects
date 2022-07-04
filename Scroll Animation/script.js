const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    let triggerHeight = (window.innerHeight * .8) /*Trigger point */

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(boxTop < triggerHeight){
            box.classList.add('show');
        } else {
            box.classList.remove('show')
        }
    });
}