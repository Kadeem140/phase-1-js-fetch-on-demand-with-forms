const init = () => {
    const inputform = document.querySelector('form');

    inputform.addEventListener('submit', (event) => {
        event.preventDefault();

        console.log(event.target.children[1].value)

        fetch(`http://localhost:3000/movies/${event.target.children[1].value}`)
        .then(response => response.json())
        .then(data => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');

            title.innerText = data.title;
            summary.innerText = data.summary;
            // LOG: (3) [{…}, {…}, {…}]
        });
    })
  
}

document.addEventListener('DOMContentLoaded', init);