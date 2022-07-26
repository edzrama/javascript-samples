const dishes = [{name: "Eggplant Parmesan", vegetarian: true},
               {name: "Spaghetti & Meatballs", vegetarian: false},
               {name: "Rosemary Mushroom Risotto", vegetarian: true},
               {name: "Garlic Rosemary Herb Focaccia", vegetarian: true},
                {name: "Pizza Tirolese", vegetarian: false}];


function vegetarianMenu(menu) {
    const vegMenu = document.querySelector("#veg_menu");
    const vegetarianOptions = menu.filter((option) => option.vegetarian == true)

    vegetarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        vegMenu.appendChild(dish)
    });
}

function nonVegetarianMenu(menu) {
    const nonVegMenu = document.querySelector("#non_veg_menu");
    const nonVegitarianOptions = menu.filter((option) => option.vegetarian == false)

    nonVegitarianOptions.forEach(option => {
        let dish = document.createElement('li');
        dish.textContent = option.name;
        nonVegMenu.appendChild(dish)
    });
}

vegetarianMenu(dishes)
nonVegetarianMenu(dishes)