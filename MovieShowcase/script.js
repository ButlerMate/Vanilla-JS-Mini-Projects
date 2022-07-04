const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=2f843f0b4958d8a42692fb993b3af8bc&page=';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=2f843f0b4958d8a42692fb993b3af8bc&query=';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main')

getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    showMovies(data.results);

}

function showMovies(movies) {
    main.innerHTML = ''

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');

        movieEl.innerHTML = `
        <div class="movie">
            <img src="${IMG_PATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getVoteColour(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        </div>
        `

        main.appendChild(movieEl)
    })
}

function getVoteColour(average) {
    if (average >= 7.5) {
        return 'green'
    } else if(average >= 5){
        return 'yellow'
    } else {
        return 'red'
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if (searchTerm && searchTerm !== '') {
        getMovies(SEARCH_URL + searchTerm)
        search.value = '';
    } else {
        window.location.reload()
    }
})


const buttons = document.querySelectorAll('.btn')
buttons.forEach((button,idx) => {
 
  button.addEventListener('click', () => highlightbuttons(idx))
 
})
 
function highlightbuttons(idx){
 
  const page = ((idx) + 1)
 
  if(page >= 2){
    getMovies(API_URL + page)
 
  } else{
    window.location.reload()
  }
 
  buttons.forEach((button, idx2) => {
    if(idx2 == idx){
      button.classList.add('full')
    } else{
      button.classList.remove('full')
    }
  })
}