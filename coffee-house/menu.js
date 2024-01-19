import { products } from "./products.js";

const categoryTea = products.filter((i) => i.category === "tea");
const categoryDessert = products.filter((i) => i.category === "dessert");
const categoryCoffee = products.filter((i) => i.category === "coffee");

const coffeeTab = document.getElementById("coffee");
const teaTab = document.getElementById("tea");
const dessertTab = document.getElementById("dessert");
const menuCard = document.querySelector(".menu__grig-layout");
const refreshBtn = document.querySelector(".button-refresh");

refreshBtn.addEventListener("click", (e) => {
  const cards = document.querySelectorAll(".menu__card");
  cards.forEach((i) => {
    i.classList.remove("card-hidden");
  });
  refreshBtn.classList.add("button-refresh-hidden");
});

coffeeTab.addEventListener("click", (e) => {
  coffeeTab.classList.add("drink_active");
  teaTab.classList.remove("drink_active");
  dessertTab.classList.remove("drink_active");

  menuCard.innerHTML = "";
  display(categoryCoffee);
  refreshBtn.classList.remove("button-refresh-hidden");
});

teaTab.addEventListener("click", (e) => {
  teaTab.classList.add("drink_active");
  coffeeTab.classList.remove("drink_active");
  dessertTab.classList.remove("drink_active");

  menuCard.innerHTML = "";
  display(categoryTea);
  refreshBtn.classList.add("button-refresh-hidden");
});

dessertTab.addEventListener("click", (e) => {
  dessertTab.classList.add("drink_active");
  coffeeTab.classList.remove("drink_active");
  teaTab.classList.remove("drink_active");

  menuCard.innerHTML = "";
  display(categoryDessert);
  refreshBtn.classList.remove("button-refresh-hidden");
});

const display = (a) => {
  menuCard.innerHTML = a
    .map((item, index) => {
      const classCard = index > 3 ? "menu__card card-hidden" : "menu__card";
      const { image, imageURL, name, description, price } = item;
      return `
    <div class="${classCard}">
    <div class="image" style="background-image: url('${imageURL}')"></div>
    <div class="menu__text-content">
    <h3 class="text-content__title">${name}</h3>
    <p class="text-content__text">${description}</p>
    <p class="price">$${price}</p>
    </div>
    </div>
    `;
    })
    .join("");
};

display(categoryCoffee);
