// Javascript Error Handling
"use strict";
const variable = 'My Name';
console.log(variable);

// Type Error to constant variable
// const name = "Peter";
// name = "Joe";

const makeError = () => {
    let i = 1 ;
       while (i <=5){
    try{
        // const name = "Peter";
        // name = "Joe";
        // throw new Error("this is a error")
        if(i % 2 !== 0) {
            throw new Error("Odd Number!");
        }
        // will not execute when error
        console.log("Even Number!");
    } catch(err){
        // console.error(err);
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
        // console.warn(err);
        // console.table(err);
    } finally {
        // execute no matter what
        console.log("....finally");
        i++;
    }
       }
}

makeError();

const customError = message => {
    this.message = message;
    this.name = 'customError';
    this.stack = `${this.name}: ${this.message}`;
}