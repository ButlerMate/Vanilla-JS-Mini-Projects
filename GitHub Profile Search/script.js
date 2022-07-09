const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

async function getUser(username) {
	try {
		const { data } = await axios.get(APIURL + username);
		
		createCard(data);
		getRepos(username);
	} catch (err) {
		console.log(err); /*Could check for certain responses here */
		createError();
	}
}

async function getRepos(username) {
	try {
		const { data } = await axios.get(APIURL + username + '/repos?sort=created');
		createRepos(data);
	} catch (err) {
		console.log(err); /*Could check for certain responses here */
	}
}

function createCard(user) {
	const cardHTML = `<div class="card">
        <div>
            <img
                src="${user.avatar_url}"
                alt="${user.name}"
                class="avatar"
            />
        </div>
        <div class="user-info">
            <h2>${user.name}</h2>
            <p>
                ${user.bio}
            </p>
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div class="repos" id="repos">
                
            </div>
        </div>
    </div>`;

	main.innerHTML = cardHTML;
}

function createError() {
	const cardHTML = `
    <div class="card">
        <h1>No profile with this username</h1>
    </div>`;

	main.innerHTML = cardHTML;
}

function createRepos(repos) {
	const reposEl = document.getElementById('repos');
    console.log(repos)
	repos.slice(0, 10).forEach((repo) => {
		const repoEl = document.createElement('a');
		repoEl.classList.add('repo');
		repoEl.href = repo.html_url;
		repoEl.target = '_blank';
		repoEl.textContent = repo.name;

		reposEl.appendChild(repoEl);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const user = search.value;

	if (user) {
		getUser(user);
		search.value = '';
	}
});
