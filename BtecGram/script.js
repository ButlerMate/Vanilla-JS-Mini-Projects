const imgs = document.querySelectorAll('.image');
const hearts = document.querySelectorAll('.heart');
const floater = document.getElementById('floater');

hearts.forEach((heart) => {
	heart.addEventListener('click', () => {
		heart.classList.toggle('liked');
	});
});

imgs.forEach((img, idx) => {
	img.addEventListener('dblclick', (e) => {
		console.log('test');
		hearts[idx].classList.add('liked');
        console.log(e)
		floatHeart(e, img);
	});
});

function floatHeart(pos, curImg) {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');
	heart.classList.add('float');
	const x = pos.offsetX;
	const y = pos.offsetY;
    console.log(x, y)

    heart.style.top = `${y}px`
    heart.style.left = `${x}px`
    curImg.appendChild(heart)
    
    setTimeout(() => heart.remove(), 1000)
};
