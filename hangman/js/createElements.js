const abc = "абвгдежзийклмнопрстуфхцчшщъыьэюя";

const addEllements = () => {
  const main = document.createElement("main");
  main.classList.add("main");

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper");

  const leftSection = document.createElement("section");
  leftSection.classList.add("left-section");

  const rightSection = document.createElement("section");
  rightSection.classList.add("right-section");

  const gallows = document.createElement("div");
  gallows.classList.add("gallows");

  const head = document.createElement("div");
  head.classList.add("head");

  const body = document.createElement("div");
  body.classList.add("body");

  const leftHand = document.createElement("div");
  leftHand.classList.add("leftHand");

  const rightHand = document.createElement("div");
  rightHand.classList.add("rightHand");

  const leftLeg = document.createElement("div");
  leftLeg.classList.add("leftLeg");

  const rightLeg = document.createElement("div");
  rightLeg.classList.add("rightLeg");

  const nameGame = document.createElement("h1");
  nameGame.classList.add("title");
  nameGame.textContent = "Hangman game";

  const letters = document.createElement("div");
  letters.classList.add("letters");

  const word = document.createElement("p");
  word.classList.add("word");
  word.textContent = "_______________";

  const hint = document.createElement("div");
  hint.classList.add("hint");

  const headerHint = document.createElement("h2");
  headerHint.textContent = "Подсказка: ";

  const bodyHint = document.createElement("span");
  bodyHint.textContent = "Разносторонние знания";

  const guess = document.createElement("h3");
  guess.innerHTML = `Осталось <span class="counter">6</span> попыток`;

  const keyboard = document.createElement("div");
  keyboard.classList.add("keyboard");

  letters.append(word);
  rightSection.append(letters);
  headerHint.append(bodyHint);
  hint.append(headerHint);
  hint.append(guess);
  rightSection.append(hint);
  for (let item of abc) {
    const key = document.createElement("div");
    key.textContent = item;
    key.classList.add("key");
    keyboard.append(key);
  }
  rightSection.append(keyboard);
  leftSection.append(gallows);
  gallows.append(head);
  gallows.append(body);
  gallows.append(leftHand);
  gallows.append(rightHand);
  gallows.append(leftLeg);
  gallows.append(rightLeg);
  leftSection.append(nameGame);
  wrapper.append(leftSection);
  wrapper.append(rightSection);
  main.append(wrapper);
  document.body.append(main);
};

addEllements();
