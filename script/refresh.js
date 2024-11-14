export function refresh() {
    const quoteEl = document.querySelector('.quote');
    const authorEl = document.querySelector('.author');
    const changeQuoteBtn = document.querySelector('.change-quote');

    const quotes = [
        {
            text: "salom",
            author: "salom"
        },
        {
            text: "hayir",
            author: "hayir"
        },
        {
            text: "",
            author: ""
        }
    ];


    function displayRandomQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteEl.textContent = randomQuote.text;
        authorEl.textContent = randomQuote.author;
    }

    changeQuoteBtn.addEventListener('click', displayRandomQuote);
}
