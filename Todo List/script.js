const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUl = document.getElementById('todos');

const todos= JSON.parse(localStorage.getItem('todos'))

if (todos){
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;
    console.log(todo)
	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoEl = document.createElement('li');
		if (todo && todo.complete) {
			todoEl.classList.add('complete');
		}

		todoEl.innerText = todoText;

		todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('complete')
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            updateLS();
            todoEl.remove();
        });

		todosUl.appendChild(todoEl);

		input.value = '';

        updateLS();
	}
}


function updateLS(){
    todosEl = document.querySelectorAll('li');

    const todos = []

    todosEl.forEach(todo => {
        todos.push({
            text: todo.innerText,
            complete: todo.classList.contains('complete')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}


