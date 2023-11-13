"use strict";
const rollDiceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const newBtn = document.querySelector(".btn--new");
const dice = document.querySelector(".dice");
let score = 0;
let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let currScore0 = document.querySelector("#current--0");
let currScore1 = document.querySelector("#current--1");
let currScore = document.querySelector(".current-score");
let tempScore = 0;
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
let resScore0 = 0;
let resScore1 = 0;

if (
  !player0.classList.contains("player--winner") ||
  !player1.classList.contains("player--winner")
) {
  rollDiceBtn.addEventListener("click", function () {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    tempScore = tempScore + randomNumber;

    if (!player0.classList.contains("player--active")) {
      currScore1.textContent = tempScore;
      console.log("a");
    } else {
      currScore0.textContent = tempScore;
      console.log("b");
    }

    //console.log(currScore);
    //console.log(tempScore);

    if (randomNumber === 1) {
      dice.src = "dice-1.png";
      tempScore = 0;
      currScore0.textContent = 0;
      currScore1.textContent = 0;
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
    } else if (randomNumber === 2) {
      dice.src = "dice-2.png";
    } else if (randomNumber === 3) {
      dice.src = "dice-3.png";
    } else if (randomNumber === 4) {
      dice.src = "dice-4.png";
    } else if (randomNumber === 5) {
      dice.src = "dice-5.png";
    } else if (randomNumber === 6) {
      dice.src = "dice-6.png";
    }
  });

  holdBtn.addEventListener("click", function () {
    score = score + tempScore;
    console.log(score);
    console.log(tempScore);

    if (!player0.classList.contains("player--active")) {
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
      tempScore = 0;
      currScore0.textContent = 0;
      currScore1.textContent = 0;
      resScore1 = resScore1 + score;
      score1.textContent = resScore1;
      score = 0;
      console.log("a");
      if (resScore1 >= 100) {
        player1.classList.add("player--winner");
      }
    } else {
      player0.classList.toggle("player--active");
      player1.classList.toggle("player--active");
      tempScore = 0;
      currScore0.textContent = 0;
      currScore1.textContent = 0;
      resScore0 = resScore0 + score;
      score0.textContent = resScore0;
      score = 0;
      console.log("b");
      if (resScore0 >= 100) {
        player0.classList.add("player--winner");
      }
    }
  });
} else {
  console.log("Spiel ist vorbei.");
}

newBtn.addEventListener("click", function () {
  score = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  resScore0 = 0;
  resScore1 = 0;
  tempScore = 0;

  player0.classList.add("player--active");
  player1.classList.remove("player--active");

  if (player0.classList.contains("player--winner")) {
    player0.classList.remove("player--winner");
    player0.classList.add("player--active");
    console.log("a");
  } else {
    player1.classList.remove("player--winner");
    player0.classList.add("player--active");
    console.log("b");
  }
});
