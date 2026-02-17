// Random Quote Generator Function

function generateQuote() {
    const quotes = [
        {
            quote: "Words are, in my not-so-humble opinion, our most inexhaustible source of magic",
            author: "Albus Dumbledore"
        },
        {
            quote: "It is impossible to manufacture or imitate love.",
            author: "Horace Slughorn"
        },
        {
            quote: "size is no guarantee of power",
            author: "George Weasley"
        }
    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById('quotation').innerHTML = quotes [arrayIndex].quote;
    document.getElementById('author').innerHTML = quotes [arrayIndex].author;
}

window.onload = function () {
    generateQuote();
    document.getElementById('generate').addEventListener('click', generateQuote);
}