const ratings = document.querySelectorAll('.rating');
const submit = document.querySelector('#submit');
const ratContainer = document.querySelector('.ratings-container');
const panel = document.querySelector('#panel');

let selectedRating = ""

ratContainer.addEventListener('click', (e) => {
	removeActive();
	selectedRating = e.target.closest('.rating').dataset.rating;
    console.log(selectedRating)
	e.target.closest('.rating').classList.add('active');
    submit.classList.add('valid')
});

function removeActive() {
	ratings.forEach((rating) => {
		rating.classList.remove('active');
	});
}


submit.addEventListener('click', (e) => {
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
        <p>We'll use your feedback to improve our customer support</p>
    `
})

/*
Possibly add an after pseudo selector to add an invisible clickable 
plane, would nullify errors thrown with this method, and also would allow
to click anywhere and not just the pictures using the parentNode malarky*/