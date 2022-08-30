var quotes = [
    '"Let the improvement of yourself keep you so busy that you have no time to criticize others." — Roy T. Bennett',
    '"Courage is not the absence of fear, but rather the assessment that something else is more important than fear." — Franklin D. Roosevelt',
    '"Care about what other people think and you will always be their prisoner." — Lao Tzu',
    '"Whether you think you can, or you think you can\'t, you\'re right." — Henry Ford'
]


function returnQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote-text').innerHTML = quotes[randomNumber];
}