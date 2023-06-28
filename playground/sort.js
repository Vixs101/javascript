// Using the Fisher-Yates shuffle to shuffle and array

const cards = [50, 30, 60, 72, 11, 22];

document.getElementById("demo1").innerHTML = cards;
//The fisher yates shuffle
function shuffleCards() {
    for (i = cards.length - 1; i > 0; i--){
        const j = Math.trunc(Math.random() * (i + 1));
        const k = cards[i];
        cards[i] = cards[j];
        cards[j] = k;
    }
    document.getElementById("demo1").innerHTML = cards;
}

 