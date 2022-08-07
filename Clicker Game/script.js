const screens = document.querySelectorAll('.screen');

const charSelectBtns = document.querySelectorAll('.choose-char-btn');

const startBtn = document.getElementById('start-btn');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const gameContainer = document.getElementById('game-container');

let seconds = 0;
let score = 0;
let selectedChar = {};

startBtn.addEventListener('click', () => {
	screens[0].classList.add('up');

});

charSelectBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		const img = btn.querySelector('img');
		const src = img.getAttribute('src');
		selectedChar = { src };
		screens[1].classList.add('up');
		setTimeout(createButton, 1);
		startGame();
	});
});

function startGame() {
	setInterval(increaseTime, 1000);
	// gameContainer.style.backgroundImage = `url(alex.png)`;
}

function increaseTime() {
	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	m = m < 10 ? `0${m}` : m;
	s = s < 10 ? `0${s}` : s;
	timeEl.innerHTML = `Time: ${m}:${s}`;
	seconds++;
}

function createButton() {
	const button = document.createElement('div');
	button.classList.add('x-button');
	const { x, y } = getRandomLocation();
	button.style.top = `${y}px`;
	button.style.left = `${x}px`;
	button.innerHTML = `<img src="xbutton.png">`;

	button.addEventListener('click', buttonClicked);
	gameContainer.appendChild(button);
}

function getRandomLocation() {
	const width = window.innerWidth;
	const height = window.innerHeight;
	const x = Math.random() * (width - 200) + 100;
	const y = Math.random() * (height - 200) + 100;
	return { x, y };
}

function buttonClicked() {
	increaseScore();
	this.classList.add('clicked');
    console.log(this)
	setTimeout(() => this.remove(), 500);
	addButtons();
}

function addButtons() {
	setTimeout(createButton, 1000);
	setTimeout(createButton, 1500);
}

function increaseScore() {
	score++;

	if (score > 19) {
		messageEl.classList.add('visible');
	}

	scoreEl.innerHTML = `Score: ${score}`;
}
