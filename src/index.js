import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadContact } from "./contact.js";
import { wipeContent } from "./wipe.js";

loadHome();

const homeButton = document.querySelector("#homeButton");
homeButton.addEventListener("click", ()=> {
    wipeContent();
    loadHome();
});

const menuButton = document.querySelector("#menuButton");
menuButton.addEventListener("click", () => {
    wipeContent();
    loadMenu();
});


const contactButton = document.querySelector("#contactButton");
contactButton.addEventListener("click", () => {
    wipeContent();
    loadContact();
});