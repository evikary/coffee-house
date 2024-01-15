import "./createElements.js";
const keyboard = document.querySelector(".keyboard");
const wordElement = document.querySelector(".word");
const counter = document.querySelector(".counter");
const head = document.querySelector(".head");
const body = document.querySelector(".body");
const leftHand = document.querySelector(".leftHand");
const rightHand = document.querySelector(".rightHand");
const leftLeg = document.querySelector(".leftLeg");
const rightLeg = document.querySelector(".rightLeg");

const word = "эрудированность";
let secret = "_______________";
let userLetters = "";

let count = +counter.textContent;

const countGuess = () => {
  count -= 1;
  counter.textContent = count;
};

const showGreetingModal = () => {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerHTML = `<h1>Поздравляем!!! &#127874;</h1>
                        <p class='greeting-text'>(Сегодня вас &#128520; не повесят)</p>
                        <p class='greeting-someText'>Было загадано слово: <br/><br/><span class='greeting-hint'>Эрудированность</span></p>
                        <button class='btn'>Попробовать еще раз</button>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modalOverlay");

  modal.append(greeting);
  modalOverlay.append(modal);
  document.body.append(modalOverlay);
};

const showRequiemModal = () => {
  const greeting = document.createElement("div");
  greeting.classList.add("greeting");
  greeting.innerHTML = `<h1>&#128123;Вы проиграли!</h1>
                        <p class='greeting-text'>(Немного подергаетесь и &#128128;успокоитесь)</p>
                        <p class='greeting-someText'>Было загадано слово: <br/><br/><span class='greeting-hint'>Эрудированность</span></p>
                        <button class='btn'>Попробовать еще раз</button>`;

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modalOverlay");

  modal.append(greeting);
  modalOverlay.append(modal);
  document.body.append(modalOverlay);
};

keyboard.addEventListener("click", (e) => {
  if (e.target.className === "key") {
    const letter = e.target.textContent;
    userLetters += letter;
    e.target.classList.add("disabled");

    if (!word.includes(letter)) {
      console.log("count", count);
      countGuess();

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
    }

    const newWord = word
      .split("")
      .map((item) => {
        return userLetters.includes(item) ? item : "_";
      })
      .join("");
    secret = newWord;
    wordElement.textContent = secret;
    console.log("secret", secret);

    if (!secret.includes("_")) {
      showGreetingModal();
    }
  }
});
