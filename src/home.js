import pizzajpg from "./pizza1.jpg";
import "./style.css";

function load() {
    const headline = document.createElement("h1");
    headline.classList.add("headline");
    headline.textContent = "Order now!";

    const blurb = document.createElement("p");
    blurb.textContent = "Bennie's pizza is a new casual venture by Michelin-star chef Benny Italiano" ;

    const hero = document.createElement("div");
    hero.classList.add("hero");
    hero.append(headline, blurb);
   
    const home = document.createElement("div");
    home.id = "home";
    home.appendChild(hero);

    const content = document.querySelector("#content");
    content.appendChild(home);
}

export const loadHome = load;