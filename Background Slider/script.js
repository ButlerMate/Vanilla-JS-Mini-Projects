const body = document.body;
const slides = document.querySelectorAll('.slide');
const right = document.getElementById('right');
const left = document.getElementById('left');

let activeSlide = 0;

setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
	slides.forEach((slide) => {
		slide.classList.remove('active');
	});
	slides[activeSlide].classList.add('active');
}

right.addEventListener('click', () => goRight);

left.addEventListener('click', () => goLeft());

window.addEventListener('keydown', (e) => {
	if (e.code === 'ArrowRight') {
		goRight();
	} else if (e.code == 'ArrowLeft') {
		goLeft();
	}
});

function goLeft() {
	if (activeSlide >= 1) {
		activeSlide--;
		setBgToBody();
		setActiveSlide();
	}
}

function goRight() {
	if (activeSlide < slides.length - 1) {
		activeSlide++;
		setBgToBody();
		setActiveSlide();
	}
}
