const menu_1 = ["pizza", "pasta",]
const menu_2 = ["pizza", "calzones",]
const menu_3 = ["spaghetti", "calzones",]
const menu_4 = ["lobster", "beef stew",]

const combinedMenu = new Set([...menu_1,...menu_2,...menu_3,...menu_4])
console.log(combinedMenu)

    const menu = document.querySelector("#combined-menu");

    combinedMenu.forEach(item => {
        console.log(item)
        let dish = document.createElement('li');
        dish.textContent = item;
        menu.appendChild(dish)
    });

