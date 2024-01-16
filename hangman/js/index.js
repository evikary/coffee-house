import { dataWords } from "./dataWords.js";
import "./createElements.js";

const abc = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

const keyboard = document.querySelector(".keyboard");
const wordElement = document.querySelector(".word");
const hintText = document.querySelector(".hintText");
const counter = document.querySelector(".counter");
const head = document.querySelector(".head");
const body = document.querySelector(".body");
const leftHand = document.querySelector(".leftHand");
const rightHand = document.querySelector(".rightHand");
const leftLeg = document.querySelector(".leftLeg");
const rightLeg = document.querySelector(".rightLeg");

let word;
let hint;
let secret;
let userLetters;
let faledLetter;
let count;

const refresh = () => {
  wordElement.textContent = secret;
  hintText.textContent = hint;
  counter.textContent = count;
  head.classList.remove("show");
  body.classList.remove("show");
  leftHand.classList.remove("show");
  rightHand.classList.remove("show");
  leftLeg.classList.remove("show");
  rightLeg.classList.remove("show");

  const key = document.querySelectorAll(".key");
  key.forEach((item) => {
    item.classList.remove("disabled");
  });
};

const initGame = () => {
  const index = Math.floor(Math.random() * dataWords.length);
  word = dataWords[index].word;
  hint = dataWords[index].hint;
  secret = "_".repeat(word.length);
  userLetters = "";
  faledLetter = "";
  count = 6;
  refresh();
};

initGame();

const countGuess = () => {
  count -= 1;
  counter.textContent = count;
};

const showGreetingModal = () => {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerHTML = `<h1>Поздравляем!!! &#127874;</h1>
                        <p class='greeting-text'>(Сегодня вас &#128520; не повесят)</p>
                        <p class='greeting-someText'>Было загадано слово: <br/><br/><span class='greeting-hint'>${word}</span></p>
                        <button class='btn'>Попробовать еще раз</button>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modalOverlay");

  modal.append(greeting);
  modalOverlay.append(modal);
  document.body.append(modalOverlay);

  const btnRestart = document.querySelector(".btn");
  btnRestart.addEventListener("click", (e) => {
    modalOverlay.remove();
    initGame();
  });
};

const showRequiemModal = () => {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerHTML = `<h1>&#128123;Вы проиграли!</h1>
                        <p class='greeting-text'>(Немного подергаетесь и &#128128;успокоитесь)</p>
                        <p class='greeting-someText'>Было загадано слово: <br/><br/><span class='greeting-hint'>${word}</span></p>
                        <button class='btn'>Попробовать еще раз</button>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modalOverlay");

  modal.append(greeting);
  modalOverlay.append(modal);
  document.body.append(modalOverlay);

  const btnRestart = document.querySelector(".btn");
  btnRestart.addEventListener("click", (e) => {
    modalOverlay.remove();
    initGame();
  });
};

const checkIncorrectGuess = (guess) => {
  if (count === 5) {
    head.classList.add("show");
    return;
  }
  if (count === 4) {
    body.classList.add("show");
    return;
  }
  if (count === 3) {
    leftHand.classList.add("show");
    return;
  }
  if (count === 2) {
    rightHand.classList.add("show");
    return;
  }
  if (count === 1) {
    leftLeg.classList.add("show");
    return;
  }
  if (count === 0) {
    rightLeg.classList.add("show");
    showRequiemModal();
    return;
  }
};

const checkCorrectGuess = () => {
  const newWord = word
    .split("")
    .map((item) => {
      return userLetters.includes(item) ? item : "_";
    })
    .join("");
  secret = newWord;
  wordElement.textContent = secret;

  if (!secret.includes("_")) {
    showGreetingModal();
  }
};

const checkVirtualKey = (e) => {
  if (e.target.className === "key") {
    const letter = e.target.textContent;
    userLetters += letter;
    e.target.classList.add("disabled");

    if (!word.includes(letter)) {
      countGuess();
      checkIncorrectGuess();
    }

    checkCorrectGuess();
  }
};

const checkRealKey = (e) => {
  userLetters += e;
  const abcVirtual = document.querySelectorAll(".key");

  abcVirtual.forEach((item) => {
    if (item.textContent === e) {
      item.classList.add("disabled");
    }
  });

  if (!word.includes(e)) {
    if (!faledLetter.includes(e)) {
      faledLetter += e;
      countGuess();
      checkIncorrectGuess();
    }
  }

  checkCorrectGuess();
};

document.addEventListener("keydown", function (e) {
  if (abc.includes(e.key)) {
    checkRealKey(e.key);
  }
});

keyboard.addEventListener("click", (e) => {
  checkVirtualKey(e);
});
