import pizzajpg from "./pizza1.jpg";

function load() {
    const content = document.querySelector("#content");
    const mainImage= document.createElement("img");
    mainImage.src = pizzajpg;
    const headline = document.createElement("h1");
    headline.textContent = "Bennie's Pizza";
    const blurb = document.createElement("p");
    blurb.textContent = "Bennie's pizza is a new casual venture by Michelin-star chef Benny Italiano" ;

    content.append(mainImage, headline, blurb);
}

export const loadPage = load;