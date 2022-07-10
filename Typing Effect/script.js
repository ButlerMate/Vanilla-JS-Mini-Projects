const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const texts = [
	"Hi, I'm Liam, Liam Butler...",
	"I'm a recent Computer Science Graduate from Swansea University",
	"And I'm currently looking for a front end developer Job!!!",
];

let textCount = 0;
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
	textEl.textContent = texts[textCount].slice(0, idx);

	if (idx >= texts[textCount].length) {
		setTimeout(() => {
            console.log(textCount, texts.length)
            if (textCount !== texts.length-1) {
                textCount++;
                idx = 0;
                textEl.textContent = '';
                writeText();
            }
		}, 1250);

	} else {
		idx++;
        setTimeout(writeText, speed);
	}

	
}
