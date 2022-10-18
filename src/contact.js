import Staff from "./staff";

const contact = document.createElement("div");
contact.classList.add("contact");

const contactTitle = document.createElement("h2");
contactTitle.textContent = "Contact";
contact.appendChild(contactTitle);

const contactContent = document.createElement("div");
contactContent.classList.add("contact-content");
contact.appendChild(contactContent);

const contactList = new Staff("contact");
contactList.add("John", "chef", "zzz@qqq.com", "555-666-999");
contactList.add("David", "manager", "lll@ddd.com", "232-644-559");
contactList.add("Mike", "waiter", "yyy@ddd.com", "335-655-969");

const contacts = contactList.contactList;

console.log(contacts);

for (let x in contacts) {
    const contactCard = document.createElement("div");
    contactCard.setAttribute("id", `${contacts[x].position}`);

    const cardName = document.createElement("p");
    cardName.classList.add("card-name");
    cardName.textContent = `${contacts[x].name}`;

    const cardPosition = document.createElement("p");
    cardPosition.classList.add("card-position");
    cardPosition.textContent = `${contacts[x].position}`;

    const cardEmail = document.createElement("p");
    cardEmail.classList.add("card-email");
    cardEmail.textContent = `${contacts[x].email}`;

    const cardNumber = document.createElement("p");
    cardNumber.classList.add("card-number");
    cardNumber.textContent = `${contacts[x].number}`;

    contactCard.appendChild(cardName);
    contactCard.appendChild(cardPosition);
    contactCard.appendChild(cardEmail);
    contactCard.appendChild(cardNumber);

    contactContent.appendChild(contactCard);
}

export default contact;
