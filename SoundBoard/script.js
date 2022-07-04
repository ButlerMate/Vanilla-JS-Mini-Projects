const sounds = document.querySelectorAll('audio');

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    console.log(sound.id);

    btn.textContent = sound.id

    btn.addEventListener('click', () => {
        stopSound();
        sound.play();
    })
    
    document.getElementById('buttons').
    appendChild(btn)
})

function stopSound() {
    sounds.forEach(sound => {
        sound.pause();
        sound.currentTime = 0;
    })
}