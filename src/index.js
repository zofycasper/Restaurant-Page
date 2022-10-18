import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";
import Section from "./section";
import Dish from "./dish";

const contentDiv = document.getElementById("content");
const nav = document.createElement("div");
const footer = document.createElement("div");
const main = document.createElement("div");

// Construct navbar section
const navbar = new Section(nav);
nav.classList.add("nav");
navbar.create("button", "Home");
navbar.create("button", "Menu");
navbar.create("button", "Contact");
navbar.update();

// Construct footer section
const footerSection = new Section(footer);
footer.classList.add("footer");
footerSection.create("button", "test");
footerSection.update();

// ContentDiv update
const mainSection = new Section(main);
mainSection.append(home);
main.classList.add("main");

// Append default page
contentDiv.appendChild(nav);
contentDiv.appendChild(main);
contentDiv.appendChild(footer);

// Add function to navbar buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
        let buttonValue = button.innerText;
        return buttonValue == "Menu"
            ? mainSection.append(menu)
            : buttonValue == "Home"
            ? mainSection.append(home)
            : mainSection.append(contact);
    });
});
