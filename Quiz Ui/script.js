const submitBtn = document.querySelector('.btn');
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const aText = document.getElementById('a_text');
const bText = document.getElementById('b_text');
const cText = document.getElementById('c_text');
const dText = document.getElementById('d_text');

const quizData = [
	{
		question: 'What is my (Liam Butler) favourite game?',
		a: 'Portal 2',
		b: 'Black Ops 2',
		c: 'Terraria',
		d: 'Counter Strike Global Offensive',
		correct: 'c',
	},
	{
		question: 'L Plus ?',
		a: 'Ratio',
		b: 'Ratatouile',
		c: 'OL',
		d: 'Plus, successor to C++',
		correct: 'a',
	},
	{
		question: 'GOAT Java IDE?',
		a: 'Visual Studio Code',
		b: 'Eclipse',
		c: 'Notepad++',
		d: 'Intellij',
		correct: 'd',
	},
	{
		question: 'The best colour of all time no question?',
		a: '#fafafa',
		b: 'Yellow',
		c: 'Red',
		d: 'Blue',
		correct: 'b',
	},
	{
		question: 'What class honours did I graduate with?',
		a: 'First',
		b: '2:1',
		c: '2:2',
		d: 'Third',
		correct: 'a',
	},
];

let curQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
	deselectAnswers();
	const curQuizData = quizData[curQuestion];
	questionEl.innerText = curQuizData.question;
	aText.innerText = curQuizData.a;
	bText.innerText = curQuizData.b;
	cText.innerText = curQuizData.c;
	dText.innerText = curQuizData.d;
}

function deselectAnswers() {
	answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
	let answer;

	answerEls.forEach((answerEl) => {
		if (answerEl.checked) {
			answer = answerEl.id;
			return answer;
		}
	});
	return answer;
}

submitBtn.addEventListener('click', () => {
	const answer = getSelected();
	if (answer) {
		if (answer == quizData[curQuestion].correct) {
			score++;
		}
		curQuestion++;

		if (curQuestion < quizData.length) {
			loadQuiz();
		} else {
			quiz.innerHTML = `<h2>You got ${score}/${quizData.length} correct</h2>

            <button onclick="location.reload()" class="final">Reload</button>
            `;
		}
	}
});

submitBtn.addEventListener('mouseover', () => {
	quiz.style.border = '2px solid #ffb133';
});

submitBtn.addEventListener('mouseout', () => {
	quiz.style.border = '2px solid #FFCA77';
});
