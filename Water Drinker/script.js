const rem = document.getElementById('rem');
const litres = document.getElementById('litres');
const percent = document.getElementById('percentage');
const smallCups = document.querySelectorAll('.cup.cup-small');
const totalCups = smallCups.length;

litres.textContent = "2 Litres"
let clickedCups = 0;
fillerUpper(clickedCups);

smallCups.forEach(cup => {
    cup.addEventListener('click', () => {
        if (cup.classList.contains('full')){
            clickedCups--;
            cup.classList.remove('full')
            fillerUpper(clickedCups);
        } else {
            cup.classList.add('full');
            clickedCups++;
            fillerUpper(clickedCups)
        }
    });

    
})

function fillerUpper(clickedCups) {
    if (clickedCups === 0) {
        percent.style.contentVisibility = 'hidden';
        percent.style.height = 0
    } else {
        percent.style.contentVisibility = 'visible';
        percent.style.height = `${clickedCups / totalCups * 330}px`
        percent.textContent = `${clickedCups / totalCups * 100}%`
    }

    if (clickedCups === totalCups) {
        rem.style.visibility = 'hidden';
        rem.style.height = 0;
    } else {
        rem.style.visibility = 'visible';
        litres.textContent = `${2 - (250 * clickedCups / 1000)} Litres`
    }

}