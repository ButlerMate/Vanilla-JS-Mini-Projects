const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

btn.addEventListener('click', () => createToast());

function createToast() {
	const toast = document.createElement('div');

	toast.innerHTML = `<div class="toast">${getRandomMsg()}</div>`;

	toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove()
    }, 3500)

}

function getRandomMsg(){
    const messages = ['Msg 1', 'Msg 2', 'Msg 3', 'Msg 4', 'Msg 5']
    return messages[Math.floor(Math.random() * messages.length)]
}