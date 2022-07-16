// Web Storag API

// Not part of the DOM - refers to the window API
// Available to JS via the global variable: window

//  window is implied and not need to be written
const myArray = ["eat", "sleep", "repeat"];
const myObject = {
    name: "peter",
    logName: function () {
        console.log(this.name);
    }
};
// clear everthing
sessionStorage.clear();
sessionStorage.removeItem("mySessionStorage");
sessionStorage.setItem('mySessionStorage', JSON.Stringfy(myObject));
const mySessionData = JSON.Stringfy(sessionStorage.getItem("mySessionStorage"));

// can also access using index
const key = sessionStorage.key[0];
const length = sessionStorage.length;