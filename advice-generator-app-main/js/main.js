"use strict";

// Elements
const btnDice = document.querySelector(".container-dice");
const adviceId = document.querySelector(".advice-number");
const adviceText = document.querySelector(".advice-text");

// Functions
const getAdvice = async function () {
  try {
    const data = await fetch("https://api.adviceslip.com/advice").then((res) => res.json());

    const test = Object.values(data);
    const { id, advice } = test[0];

    adviceId.textContent = `ADVICE #${id}`;
    adviceText.textContent = advice;
  } catch (error) {
    console.log("Could not get data. Check URL");
  }
};

btnDice.addEventListener("click", getAdvice);
