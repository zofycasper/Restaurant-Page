import Section from "./section";
import Dish from "./dish";
import noodle from "./noodle.jpg";
import swonton from "./swonton.jpg";
import fwonton from "./fwonton.jpg";
import steamD from "./steamD.jpg";

const menu = document.createElement("div");
menu.classList.add("menu");

const menuTitle = document.createElement("h2");
menuTitle.textContent = "Menu";
menu.appendChild(menuTitle);

const menuContent = document.createElement("div");
menuContent.classList.add("menu-content");
menu.appendChild(menuContent);

// const noodlePic = new Image();
// noodlePic.src = noodle;
// menu.appendChild(noodlePic);

const menuSection = new Section(menu);
const normalDish = new Dish("normal");
normalDish.add("Peanut Butter Mixed Noodle", 5, noodle);
normalDish.add("Wonton Soup", 6, swonton);
normalDish.add("Fried Wonton", 6, fwonton);
normalDish.add("Steamed Dumplings", 8, steamD);

const dishes = normalDish.dishList;

console.log(normalDish);
console.log(dishes);

for (let x in dishes) {
    const dishCard = document.createElement("div");
    dishCard.setAttribute("id", `${dishes[x].name}`);
    dishCard.classList.add("card");
    const dishPic = new Image();
    const disc = document.createElement("div");
    disc.classList.add("disc");
    const dishName = document.createElement("p");
    const dishPrice = document.createElement("p");

    dishName.classList.add("dish-name");
    dishPrice.classList.add("dish-price");

    dishPic.src = `${dishes[x].pic}`;
    dishPic.setAttribute("id", `${dishes[x].name}`);
    dishName.textContent = `${dishes[x].name}`;
    dishPrice.textContent = `$${dishes[x].price}`;

    dishCard.appendChild(dishPic);
    dishCard.appendChild(disc);
    disc.appendChild(dishName);
    disc.appendChild(dishPrice);

    menuContent.appendChild(dishCard);
}

export default menu;
