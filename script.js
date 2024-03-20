// Function to fetch a random quote from the API
async function fetchQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return data.content + ' - ' + data.author;
    } catch (error) {
        console.error('Error fetching quote:', error);
        return 'Failed to fetch a quote. Please try again later.';
    }
}

// Function to generate a random quote
async function generateQuote() {
    const quoteElement = document.getElementById("quote-text");
    quoteElement.textContent = 'Fetching a new quote...';

    try {
        const quote = await fetchQuote();
        quoteElement.textContent = quote;
    } catch (error) {
        console.error('Error generating quote:', error);
    }
}

// Event listener for the button click
document.getElementById("generate-btn").addEventListener("click", generateQuote);

// Initial quote generation
generateQuote();
