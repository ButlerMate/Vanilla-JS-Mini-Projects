const btn = document.querySelector('.btn')
const search = document.querySelector('.search')
const input = document.querySelector('.input')

btn.addEventListener('click', (e) => {
    search.classList.toggle('active');
    input.focus();
    /*realistically you'd also want to disable the text box.*/
})


document.addEventListener('click', (e) => { /*Clicking outside hides the bar */
    if (e.target.nodeName === 'BODY') {
      search.classList.remove('active')
    }
})

search.addEventListener('submit', (e) => { /*Adds form functionality to act as a search bar*/
    e.preventDefault()
    input.value && console.log('submit', input.value)
    input.value = '';
})