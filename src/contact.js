import "./style.css";

function load() {
    const contactTitle = document.createElement("h2");
    contactTitle.textContent = "Contact Us";

    const phoneNumber = document.createElement("p");
    phoneNumber.classList.add("contact-info");
    phoneNumber.textContent = "123-456-7890";

    const email = document.createElement("p");
    email.classList.add("contact-info");
    email.textContent = "benniespizzeria@website.com";

    const contactCard = document.createElement("div");
    contactCard.classList.add("contact-card");
    contactCard.append(contactTitle, phoneNumber, email);
    
    const contact = document.createElement("div");
    contact.id = "contact";
    contact.append(contactCard);
    
    const content = document.querySelector("#content");
    content.append(contact);
}

export const loadContact = load;