"use strict";
///////////////////////////////////////
/* 
ЗАДАЧА: 
Создайте игру в угадай число.
Удачи)
*/

document.addEventListener("DOMContentLoaded", function () {
  const inputEl = document.querySelector(".guess"),
    checkBtn = document.querySelector(".check"),
    messageEl = document.querySelector(".message"),
    guessNumEl = document.querySelector(".number"),
    attemptsEl = document.querySelector(".score"),
    recordEl = document.querySelector('.highscore'),
    restartBtn = document.querySelector('.again');

  let randomNum = getRandomNum(1, 20);
  console.log(randomNum);
  inputEl.focus();

  let attemptsValue = attemptsEl.textContent;

  checkBtn.addEventListener("click", function (e) {
    if (inputEl.value && attemptsValue > 1) {
      if (+inputEl.value > randomNum) {
        messageEl.textContent = "Слишком много!";
        minusAttept();
      } else if (+inputEl.value < randomNum) {
        messageEl.textContent = "Слишком мало!";
        minusAttept();
      } else {
        messageEl.textContent = "Вы угадали!";
        guessNumEl.textContent = randomNum;
        minusAttept();
        if (recordEl.textContent < attemptsValue) {
          recordEl.textContent = attemptsValue;
        }
      }
    } else if (attemptsValue === 1) {
      minusAttept();
      messageEl.textContent = "Вы проиграли!";
    } else {
      inputEl.focus();
    }
  });

  restartBtn.addEventListener('click', restartGame);

  function restartGame() {
    randomNum = getRandomNum(1, 20);
    messageEl.textContent = "Начните угадывать...";
    guessNumEl.textContent = '?';
    console.log(randomNum);
    attemptsValue = 20;
    attemptsEl.textContent = attemptsValue;
    inputEl.value = '';
    inputEl.focus();
  }

  function minusAttept() {
    attemptsValue -= 1;
    attemptsEl.textContent = attemptsValue;
  }

  function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
});
