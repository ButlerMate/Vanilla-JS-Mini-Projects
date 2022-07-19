const toggles = document.querySelectorAll('.toggle');
const good = document.getElementById('good');
const fast = document.getElementById('fast');
const cheap = document.getElementById('cheap');

toggles.forEach((toggle) =>
	toggle.addEventListener('change', (e) => onlyTwo(e.target))
);

function onlyTwo(clicked) {
	if (good.checked && cheap.checked && fast.checked) {
		if (good === clicked) {
			fast.checked = false;
		}

		if (cheap === clicked) {
			good.checked = false;
		}

		if (fast === clicked) {
			cheap.checked = false;
		}
	}
}
