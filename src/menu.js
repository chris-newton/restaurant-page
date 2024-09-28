import "./style.css";

function load() {
    const title = document.createElement("h2");
    title.id = "menu-title";
    title.textContent = "Our Offerings";

    const pizzaList = document.createElement("ul");
    pizzaList.classList.add("pizza-list");
    const pizzas = ["Margerita", "Greek", "Chicken Tikka", "Meat Lovers"];
    pizzas.map((p) => {
        const pizzaElement = document.createElement("li");
        pizzaElement.textContent = p;
        pizzaList.append(pizzaElement);
    }); 
    
    const notPizzaList = document.createElement("ul");
    notPizzaList.classList.add("not-pizza-list");
    const notPizzas = ["The godfather", "Meatball Sub", "Chicken Parm", "Cheesesteak", "Chicken Cheesesteak"];
    notPizzas.map((p) => {
        const elem = document.createElement("li");
        elem.textContent = p;
        notPizzaList.append(elem);
    }); 
    
    const beverageList = document.createElement("ul");
    beverageList.classList.add("beverage-list");
    const beverages = ["Fountain Drink", "Mango Lassi", "Mexican Coke", "Orangina"];
    beverages.map((p) => {
        const elem = document.createElement("li");
        elem.textContent = p;
        beverageList.append(elem);
    }); 

    const dessertList = document.createElement("ul");
    dessertList.classList.add("dessert-list");
    const desserts = ["Cannoli", "Key Lime Pie", "Brownie"];
    desserts.map((p) => {
        const elem = document.createElement("li");
        elem.textContent = p;
        dessertList.append(elem);
    }); 
    
    const menuList = document.createElement("ul");
    menuList.classList.add("menu-list");
    menuList.append(title, pizzaList, notPizzaList, beverageList, dessertList);

    const menu = document.createElement("div");
    menu.id = "menu";
    menu.appendChild(menuList);

    const content = document.querySelector("#content");
    content.append(menu);
}

export const loadMenu = load;