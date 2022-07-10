const notInUse = [
	`Hi, Im Liam, Liam Butler...`,
	"Im a recent Computer Science Graduate from Swansea University",
	"And Im currently looking for a front end developer Job!!!",
];


//type writer object
class TypeWriter {
	constructor(txtElement, words, wait = 3000) {
		this.txtElement = txtElement;
		this.words = words;
		this.txt = '';
		this.wordIdx = 0;
		this.wait = parseInt(wait, 10);
		this.isDeleting = false;
	}
	type() {
		const i = this.wordIdx % this.words.length;
		const text = this.words[i];

		if (this.isDeleting) {
			this.txt = text.substring(0, this.txt.length - 1);
		} else {
			this.txt = text.substring(0, this.txt.length + 1);
		}

		this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

		let typeSpeed = 300;
		if (this.isDeleting) {
			typeSpeed = typeSpeed/4
		}

		if (!this.isDeleting && this.txt === text) {
			typeSpeed = this.wait;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.wordIdx++
		}
		setTimeout(() => this.type(), 150);
	}
}


// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

function init() {
	const textEl = document.getElementById('text');
	const speedEl = document.getElementById('speed');
	const wait = textEl.getAttribute('data-wait');
	const test = JSON.parse(textEl.getAttribute('data-words'));

	//init TypeWrite
	let typer = new TypeWriter(textEl, test, wait)
	typer.type();
}
