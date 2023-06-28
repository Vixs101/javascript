
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

// selecting the check button.
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    // when theres no input
    if(!guess) {
       displayMessage('⛔ No number!');
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '18rem';
            // keeping track of the highscore
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        // when guess is wrong
    } else if(guess !== secretNumber) {
        // updating the score
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥You lost the game!') ;
            document.querySelector('.score').textContent = 0;
        }        
    }
});
// function that resets the game
function resetGame() {
    score = 20;
    displayMessage('Start guessing...');
        
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

}
// selecting the again btn
document.querySelector('.again').addEventListener('click', resetGame);