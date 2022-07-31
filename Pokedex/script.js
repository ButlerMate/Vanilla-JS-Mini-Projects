const pokedex = document.querySelector('#pokedex');
const pokemon_num = 900;

const colours = {
	fire: '#fddfdf',
	grass: '#defde0',
	electric: '#fcf7de',
	water: '#def3fd',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#ececed',
	fighting: '#E71832',
	normal: '#f5f5f5',
};

const main_types = Object.keys(colours)

const fetchPokemon = async () => {
	for (let i = 1; i <= pokemon_num; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const data = await res.json();
	createEntry(data);
};

const createEntry = (pokemon) => {
	const entry = document.createElement('div');
	entry.classList.add('pokemon');

	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

    const types = pokemon.types.map(type => type.type.name)
    const entryType = main_types.find(type => types.indexOf(type) > -1)
    const colour = colours[entryType];

    entry.style.backgroundColor = colour

	const entryinnerHTML = `
        <div class="img-container">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id
							.toString()
							.padStart(3, '0')}.png" alt="">
        </div>
        <div class="info">
            <span class="number">#${pokemon.id.toString().padStart(3, 0)}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type <span>${entryType}</span></small>
        </div>`;

	entry.innerHTML = entryinnerHTML;

	pokedex.appendChild(entry);
};

fetchPokemon();
