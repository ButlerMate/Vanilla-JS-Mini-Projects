const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const upperCaseEL = document.getElementById('uppercase');
const lowerCaseEL = document.getElementById('lowercase');
const numbersEL = document.getElementById('numbers');
const symbolsEL = document.getElementById('symbols');
const generateEL = document.getElementById('generate');
const clipboardEL = document.getElementById('clipboard');
const messageEL = document.getElementById('message');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	num: getRandomNum,
	sym: getRandomSymbol,
};

clipboardEL.addEventListener('click', async () => {
	await navigator.clipboard.writeText(resultEL.textContent);
	copyMessage();
});

generateEL.addEventListener('click', () => {
	const length = lengthEL.value;
	const hasLower = lowerCaseEL.checked;
	const hasUpper = upperCaseEL.checked;
	const hasNum = numbersEL.checked;
	const hasSymbols = symbolsEL.checked;

	resultEL.innerText = generatePassword(
		hasLower,
		hasUpper,
		hasNum,
		hasSymbols,
		length
	);
});

function generatePassword(lower, upper, num, sym, len) {
	let generatedPassword = '';
	const typesCount = lower + upper + num + sym;
	const typesArr = [{ lower }, { upper }, { num }, { sym }].filter(
		(checkBox) => Object.values(checkBox)[0] //filters false boxes
	);

	if (typesCount === 0) {
		return '';
	}
	for (let i = 0; i < len; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			console.log(funcName);
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword;
}

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
	//Random number then times it then round down
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNum() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}

function copyMessage() {
	messageEL.style.display = 'block';
	clipboardEL.disabled = true;

	setTimeout(function () {
		messageEL.style.display = 'none';
		resultEL.style.animation = 'none';
		clipboardEL.disabled = false;
	}, 1000);
    const test = 'Hello'
    console.log(test[1])
}
