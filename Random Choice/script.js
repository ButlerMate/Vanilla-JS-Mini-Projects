const choices = document.querySelector('.tags');
const textarea = document.querySelector('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);
        randomSelect();

    }
})

function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()); /*Cant be an empty string and will trim white space */
    choices.innerHTML = ''
    console.log(tags)
    tags.forEach(tag => {
        const choice = document.createElement('span');
        choice.classList.add('tag');
        choice.innerText = tag;
        choices.appendChild(choice);

    });
}

function randomSelect() {
    const times = 20;
    /*This is the 'animation' 
    setInterval calls the function every 100ms (in this case)*/
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag)
        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
    }, 100)

    //This stops it and picks the final random tag
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randTag = pickRandomTag()
            highlightTag(randTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}