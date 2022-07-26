const username = Symbol("username");
const password = Symbol("password");

// use Symbol as key
const user = {
    [username]: "edzrama",
    [password]: "somepassword",
    age: 31
    
}

console.log(user.username)
console.log(user.password)
console.log(user)