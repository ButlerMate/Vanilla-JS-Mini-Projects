const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const author = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text');

setTimeout(getData, 2000);

function getData() {
	/*Wouldnt use hard coded data here, would pull data from a db or api */
	header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1657073895095-b050616ab369?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"alt="filler"/>';
	title.innerHTML = 'Lorem ipsum dolor sit amet';
	excerpt.innerHTML =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nihil!';
	profile_img.innerHTML = '<img src="Party.jpg" alt="author" id="author" />';
	author.innerHTML = 'Liam Butler';
	date.innerHTML = '17 January 2000';

	
	animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
	animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}
