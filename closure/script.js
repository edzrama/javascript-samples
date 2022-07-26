// function makeBodyBlue() {
//     document.body.style.background = '#0f62fe';
// }

// function makeBodyPink() {
//     document.body.style.background = '#ff7eb6';
// }

// function makeBodyGreen() {
//     document.body.style.background = '#42be65';
// }


// document.querySelector("#blue").addEventListener('click', makeBodyBlue);
// document.querySelector("#pink").addEventListener('click', makeBodyPink);
// document.querySelector("#green").addEventListener('click', makeBodyGreen);


// instead of having 3 functions doing the same thing do the following:

function changeBodyBg(color) {
    return () => document.body.style.background = color;
}

const bgColorBlue = changeBodyBg('#0f62fe');
const bgColorPink = changeBodyBg('#ff7eb6');
const bgColorGreen = changeBodyBg('#42be65');

document.querySelector("#blue").addEventListener('click', bgColorBlue);
document.querySelector("#pink").addEventListener('click', bgColorPink);
document.querySelector("#green").addEventListener('click', bgColorGreen);