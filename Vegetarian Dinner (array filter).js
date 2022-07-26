const dishes = [{name: "Eggplant Parmesan", vegetarian: true},
               {name: "Spaghetti & Meatballs", vegetarian: false},
               {name: "Rosemary Mushroom Risotto", vegetarian: true},
               {name: "Garlic Rosemary Herb Focaccia", vegetarian: true},
                {name: "Pizza Tirolese", vegetarian: false}];

const vegMenu = dishes.filter((item) => item.vegetarian == true)
const nonVegMenu = dishes.filter((item) => item.vegetarian == false)
console.log(vegMenu)
console.log(nonVegMenu)


