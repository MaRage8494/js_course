'use strict';

//* Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

//* Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
let currentScore,
  scores,
  activePlayer = 0,
  playing;

const setScore = function (activePlayer) {
  document.querySelector(`#score--${activePlayer}`).textContent =
    scores[activePlayer];
};

const setCurrent = function (activePlayer) {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

const restore = function () {
  //? Сброс до заводских настроек
  if (
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.contains('player--winner')
  ) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--winner');
  }
  activePlayer = 0;

  scores = [0, 0];
  setScore(0);
  setScore(1);

  if (!player0El.classList.contains('player--active')) {
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
  }

  currentScore = 0;
  setCurrent(0);
  setCurrent(1);

  diceEl.classList.add('hidden');
  playing = true;
};

restore();

const switchPlayer = function () {
  //? Переход хода
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//* Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //? Бросание кубика с поледующим прибавлением текущей суммыы
  if (playing) {
    //1. Generating dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    //2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1
    if (dice !== 1) {
      //Add dice to current score
      currentScore += dice;
      // current0El.textContent = currentScore; //!FIX
      setCurrent(activePlayer);
    } else {
      //Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  //? Добавление текущей суммы в основную
  if (playing) {
    //1. Add current score to active player`s score
    scores[activePlayer] += currentScore;
    setScore(activePlayer);
    //2. Check score (>=100). Finish
    if (scores[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
      playing = false;
    } else {
      //3. Switch player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', restore); //* Сброс игры
