import home from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";

export default class Section {
    constructor(section) {
        this.section = section;
        this.elementList = [];
    }

    append(element) {
        this.clear();
        this.section.appendChild(element);
        this.elementList.push(element);
    }

    create(eleType, text) {
        const element = document.createElement(eleType);
        element.textContent = text;
        element.setAttribute("id", `${text}`);
        element.classList.add(`${text}button`);
        this.elementList.push(element);
        return element;
    }
    update() {
        for (const element of this.elementList) {
            console.log(element);

            this.section.appendChild(element);
        }
    }

    clear() {
        this.section.textContent = "";
    }
}

const contentDiv = document.getElementById("content");
const nav = document.createElement("div");
const footer = document.createElement("div");
const content = document.createElement("div");
// const homeButton = document.createElement("button");
// const menuButton = document.createElement("button");
// const contactButton = document.createElement("button");

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

console.log(footerSection);
console.log(footerSection.create("button", "test"));

// homeButton.textContent = "Home";
// menuButton.textContent = "Menu";
// contactButton.textContent = "Contact";

// nav.appendChild(homeButton);
// nav.appendChild(menuButton);
// nav.appendChild(contactButton);

// ContentDiv update
const contentSection = new Section(content);
contentSection.append(home);
console.log({ contentSection });

contentDiv.appendChild(nav);

contentDiv.appendChild(content);
contentDiv.appendChild(footer);

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.innerText);
        let buttonValue = button.innerText;
        return buttonValue == "Menu"
            ? contentSection.append(menu)
            : buttonValue == "Home"
            ? contentSection.append(home)
            : contentSection.append(contact);
    });
});
