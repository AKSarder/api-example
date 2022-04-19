const loadQuotes = () => {
    fetch("https://api.kanye.rest")
        .then(res => res.json())
        .then(data => displayQuotes(data))
}

// loadQuotes();
const displayQuotes = quotes => {
    // console.log(quotes);
    const quotesContainer = document.getElementById("quote");
    quotesContainer.innerText = quotes.quote;
}