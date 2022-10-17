const home = document.createElement("div");
const restTitle = document.createElement("div");
const intro = document.createElement("div");
const introTitle = document.createElement("p");
const introContent = document.createElement("p");
const location = document.createElement("div");
const locationTitle = document.createElement("p");
const locationContent = document.createElement("p");

home.classList.add("home");

// Home page title
restTitle.textContent = "Shaxian Delicacies";

// Intro div content
introTitle.textContent = "Just the Right Food";
introContent.textContent =
    "Shaxian Delicacies, which have their roots in South East China's Shaxian District, comprise a variety of traditional Chinese treats such Fried Pork Dumplings, Salted Duck Gizzard, and Signature Peanut Sauce Noodle.";

// Location div content
locationTitle.textContent = "Our Location:";
locationContent.textContent = "123 Forest Drive, Forestville, Maine";

home.appendChild(restTitle);
home.appendChild(intro);
home.appendChild(location);

intro.appendChild(introTitle);
intro.appendChild(introContent);

location.appendChild(locationTitle);
location.appendChild(locationContent);
export default home;
