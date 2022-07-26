const menu_1 = ["pizza", "pasta",];
const menu_2 = ["pizza", "calzones",];
const menu_3 = ["spaghett", "calzones",];
const menu_4 = ["lobster", "beef stew",];

const combinedMenu = new Set([...menu_1,...menu_2,...menu_3,...menu_4]);
console.log(combinedMenu);

combinedMenu.forEach(option => {
        console.log(option);
    });