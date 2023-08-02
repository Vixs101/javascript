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

let playing, scores, currentScore, activePlayer;

// starting conditions
function startingConditions() {
  playing = true; // state variable
  scores = [0, 0];
  
  // variable to hold the current score after each round.
  currentScore = 0;
  activePlayer = 0;
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

    diceEl.classList.add('hidden');
    
    // removing the winner class
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    
    // setting active player
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active'); 

    // removing the winners heading
    document
    .querySelector('.win-0')
    .classList.remove('won');
    document
    .querySelector('.win-1')
    .classList.remove('won')
}


startingConditions();


function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; // switching
  currentScore = 0;  
  // changing the background
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// rolling dice functionality
roleDiceBtn.addEventListener('click', function(){
  if (playing) {
  const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
 
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      } else {
        switchPlayer();
    }
  }
});

// holding the score functionality
holdBtn.addEventListener('click', function() {
  if (playing) {
  scores[activePlayer] += currentScore;

  document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  
  if (scores[activePlayer] >= 20) {
    playing = false; //ends the game
    
    document
    .querySelector(`.win-${activePlayer}`)
    .classList.add('won'); // winner

    diceEl.classList.add('hidden');
    document
     .querySelector(`.player--${activePlayer}`)
     .classList.add('player--winner');

     document
     .querySelector(`.player--${activePlayer}`)
     .classList.remove('player--active');
  } 
  else {
  switchPlayer();
  }
}
});

// resetting the game functionality
resetBtn.addEventListener('click', function() {
  playing = true; // state variable
 
  startingConditions();


})