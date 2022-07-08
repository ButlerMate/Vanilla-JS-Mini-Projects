const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slide');
const slideLeft = document.querySelector('.left-slide');
const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const slidesTotal = slideRight.querySelectorAll('div').length;

let slideLeftTop = (slidesTotal - 1) * -100;
let slideRightTop = 0;

slideLeft.style.top = `${slideLeftTop}vh`;
slideRight.style.top = `${slideRightTop}vh`;

upButton.addEventListener('click', () => {
	slideLeftTop += 100;
	slideRightTop -= 100;
	if (slideLeftTop > 0) {
		slideLeftTop = (slidesTotal - 1) * -100;
	}
	if (slideRightTop < (slidesTotal - 1) * -100) {
		slideRightTop = 0;
	}
	slideLeft.style.top = `${slideLeftTop}vh`;
	slideRight.style.top = `${slideRightTop}vh`;
});

downButton.addEventListener('click', () => {
	slideLeftTop -= 100;
	slideRightTop += 100;
	if (slideRightTop > 0) {
		slideRightTop = (slidesTotal - 1) * -100;
	}
	if (slideLeftTop < (slidesTotal - 1) * -100) {
		slideLeftTop = 0;
	}
	slideLeft.style.top = `${slideLeftTop}vh`;
	slideRight.style.top = `${slideRightTop}vh`;
});
