
const jokeBtn = document.getElementById('jokeBtn');
const joke = document.getElementById('joke');

genJoke();

// function genJoke() {

//     const config = { 
//         headers: {
//             'Accept': 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com/', config).then(response => response.json())
//     .then((data) => {
//         joke.innerHTML = data.joke;
//     })
// }


async function genJoke() {
    const config = { 
        headers: {
            'Accept': 'application/json'
        }
    }
    /*Requests return a promise so you need to await, also need to add async to function */
    const response = await fetch('https://icanhazdadjoke.com/', config)

    const data = await response.json();

    joke.innerHTML = data.joke;

}

jokeBtn.addEventListener('click', () => genJoke());

