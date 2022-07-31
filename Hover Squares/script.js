const container = document.querySelector('.container');

const colours = ['#140FF0', '#F00F7A', '#EBF00F', '#0FF085'];

const SQUARES = 744;

for (let i = 0; i < SQUARES; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColour(square));
	square.addEventListener('mouseout', () => removeColour(square));

	container.appendChild(square);
}

function setColour(e) {
	randColour = colours[Math.floor(Math.random() * colours.length)];
	e.style.background = randColour;
	e.style.boxShadow = `0 0 5px ${randColour}, 0 0 50px ${randColour}`;
}

function removeColour(e) {
    e.style.background = '#1d1d1d'
    e.style.boxShadow = '0 0 2px #000'
}
