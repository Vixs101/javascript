'use strict';
// selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const resetBtn = document.querySelector('.btn--new');
const roleDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// variable to hold the current score after each round.
let currentScore = 0;
let activePlayer = 0;
// rolling dice functionality
roleDiceBtn.addEventListener('click', function(){
    // generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    // display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    // check for rolled 1: if true, switch to next player
      if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      } else {
        // switching the current player
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;  
        // player0El.classList.remove('player--active');
        // player1El.classList.add('player--active');
    }
})