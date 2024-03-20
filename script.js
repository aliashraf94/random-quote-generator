let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('generate-btn');


let url = 'https://api.quotable.io/random';

function getQuote() {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        quote.innerText = data.content;
        author.innerText = data.author;
    })
}

btn.addEventListener('click', getQuote);