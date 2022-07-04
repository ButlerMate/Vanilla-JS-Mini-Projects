const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('') /*splits every charcter up, returns an array */
        .map((letter, idx) => `<span style="transition-delay:${idx* 40}ms">${letter}</span>`)
        .join('') /* turns back into string*/
})