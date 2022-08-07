const container = document.querySelector('.container');
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 12;

for (let i= 0; i < rows*3; i++){
    const img = document.createElement('img');
    const reso = getRandomSize();
    img.src = `${unsplashURL}${reso}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNum()}x${getRandomNum()}`
}

function getRandomNum(){
    return Math.floor(Math.random() * 15) + 300;
}